(function () {
  var MESSAGE_NAMES = ["message", "0-1/message"];

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function rootsToSearch() {
    var roots = [];
    if (window.bsidesHsFormEl) roots.push(window.bsidesHsFormEl);
    roots.push(document);
    var iframes = document.querySelectorAll(
      'iframe.hs-form-iframe, iframe[id^="hs-form-iframe"], .hbspt-form iframe, iframe'
    );
    for (var i = 0; i < iframes.length; i++) {
      try {
        var doc = iframes[i].contentDocument || (iframes[i].contentWindow && iframes[i].contentWindow.document);
        if (doc) roots.push(doc);
      } catch (err) {}
    }
    return roots;
  }

  function findMessageField() {
    var roots = rootsToSearch();
    var i;
    for (i = 0; i < roots.length; i++) {
      var root = roots[i];
      if (!root || !root.querySelector) continue;
      var field =
        root.querySelector('textarea[name="message"]') ||
        root.querySelector('textarea.hs-input[name="message"]') ||
        root.querySelector('.hs-form textarea[name="message"]') ||
        root.querySelector("textarea.hs-input") ||
        root.querySelector("textarea");
      if (field) return field;
    }
    return null;
  }

  function setFieldValue(field, text) {
    var proto = field.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
    var desc = Object.getOwnPropertyDescriptor(proto, "value");
    if (desc && desc.set) {
      desc.set.call(field, text);
    } else {
      field.value = text;
    }
    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.dispatchEvent(new Event("change", { bubbles: true }));
    if (window.jQuery) {
      window.jQuery(field).val(text).trigger("input").trigger("change");
    }
  }

  function fillViaStoredForm(text) {
    var $form = window.bsidesHsFormJq;
    if ($form && $form.find) {
      var $msg = $form.find('textarea[name="message"], textarea.hs-input, textarea');
      if ($msg && $msg.length) {
        $msg.val(text).change();
        return true;
      }
    }
    return false;
  }

  function fillViaHubSpotV4(text) {
    var v4 = window.HubSpotFormsV4;
    if (!v4) return false;
    var form = null;
    try {
      if (window.bsidesHsV4Event && v4.getFormFromEvent) {
        form = v4.getFormFromEvent(window.bsidesHsV4Event);
      }
      if (!form && typeof v4.getForms === "function") {
        var forms = v4.getForms();
        form = forms && forms[0];
      }
      if (!form || typeof form.setFieldValue !== "function") return false;
      for (var i = 0; i < MESSAGE_NAMES.length; i++) {
        try {
          form.setFieldValue(MESSAGE_NAMES[i], text);
        } catch (err) {}
      }
      return true;
    } catch (err) {
      return false;
    }
  }

  function fillSponsorMessage(text) {
    window.bsidesPendingSponsorMessage = text;
    var filled = fillViaStoredForm(text);
    filled = fillViaHubSpotV4(text) || filled;
    var field = findMessageField();
    if (field) {
      setFieldValue(field, text);
      filled = true;
    }
    if (filled) {
      window.bsidesPendingSponsorMessage = null;
    }
    return filled;
  }

  window.bsidesCaptureHubSpotForm = function ($form) {
    window.bsidesHsFormJq = $form;
    if ($form && $form.jquery) {
      window.bsidesHsFormEl = $form.get(0);
    } else if ($form && $form.nodeType) {
      window.bsidesHsFormEl = $form;
    }
    if (window.bsidesPendingSponsorMessage) {
      fillSponsorMessage(window.bsidesPendingSponsorMessage);
    }
  };

  window.bsidesApplySponsorMessage = fillSponsorMessage;

  window.addEventListener("hs-form-event:on-ready", function (event) {
    window.bsidesHsV4Event = event;
    if (window.bsidesPendingSponsorMessage) {
      fillSponsorMessage(window.bsidesPendingSponsorMessage);
    }
  });

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || data.type !== "hsFormCallback" || data.eventName !== "onFormReady") return;
    if (window.bsidesPendingSponsorMessage) {
      fillSponsorMessage(window.bsidesPendingSponsorMessage);
    }
  });

  ready(function () {
    var dialog = document.getElementById("prospectus-modal");
    if (!dialog) return;

    var openers = document.querySelectorAll(".js-open-prospectus");
    var closers = document.querySelectorAll(".js-close-prospectus");

    function openProspectus(e) {
      if (e) e.preventDefault();
      document.documentElement.classList.add("prospectus-open");
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    }

    function closeProspectus() {
      document.documentElement.classList.remove("prospectus-open");
      if (typeof dialog.close === "function") {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
      }
    }

    openers.forEach(function (btn) {
      btn.addEventListener("click", openProspectus);
    });

    closers.forEach(function (btn) {
      btn.addEventListener("click", closeProspectus);
    });

    function tellMore(btn) {
      var name = btn.getAttribute("data-name") || "this";
      var kind = btn.getAttribute("data-kind");
      var message =
        kind === "item"
          ? "I am interested in sponsoring the " + name + ". Could you send through some more information?"
          : "I am interested in the " + name + " sponsorship tier. Could you send through some more information?";
      fillSponsorMessage(message);
      closeProspectus();
      var contact = document.getElementById("sponsorship-contact");
      var attempts = [50, 200, 600];
      attempts.forEach(function (delay) {
        setTimeout(function () {
          fillSponsorMessage(message);
          if (contact && contact.scrollIntoView && delay === 50) {
            contact.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          var field = findMessageField();
          if (field) field.focus();
        }, delay);
      });
    }

    dialog.querySelectorAll(".js-tell-more").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        tellMore(btn);
      });
    });

    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) closeProspectus();
    });

    dialog.addEventListener("close", function () {
      document.documentElement.classList.remove("prospectus-open");
    });
  });
})();
