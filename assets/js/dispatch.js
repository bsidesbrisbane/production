(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var lines = document.querySelectorAll(".event-date.dispatch");
    if (!lines.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var queue = [];
    lines.forEach(function (el) {
      var text = el.textContent.replace(/\s+/g, " ").trim();
      el.setAttribute("aria-label", text);
      el.textContent = "";
      var caret = document.createElement("span");
      caret.className = "dispatch-caret";
      caret.setAttribute("aria-hidden", "true");
      caret.textContent = "";
      el.appendChild(caret);
      queue.push({ el: el, text: text, caret: caret });
    });

    var lineIndex = 0;
    var charIndex = 0;

    function tick() {
      if (lineIndex >= queue.length) return;
      var item = queue[lineIndex];
      if (charIndex < item.text.length) {
        var ch = item.text.charAt(charIndex);
        item.caret.insertAdjacentText("beforebegin", ch);
        charIndex += 1;
        var delay = 40 + Math.floor(Math.random() * 45);
        if (ch === "," || ch === ".") delay += 160;
        setTimeout(tick, delay);
      } else {
        item.caret.remove();
        lineIndex += 1;
        charIndex = 0;
        setTimeout(tick, 420);
      }
    }

    setTimeout(tick, 240);
  });
})();
