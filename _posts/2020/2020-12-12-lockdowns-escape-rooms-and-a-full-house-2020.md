---
layout: post
title: "Lockdowns, an escape room, and a full house: BSides Brisbane 2020"
tags: conference wrap-up
published: true
permalink: /recent/2020/12/12/Thats-a-wrap-2020.html
images: 
    - 1.jpg
    - 2.jpg
    - 3.jpg
    - 4.jpg
---

If you were organising events in **2020**, you’ll remember the drill: dates moving, rules changing, and that low-level hum of “will this actually happen?” We’re still proud we got **BSides Brisbane 2020** over the line: **335 tickets** sold, and a room full of people who showed up ready to make the most of it.

What stuck with us afterwards wasn’t just the programme (though the speakers went hard). It was the **good faith** everyone brought. Sponsors who stayed in when they could have walked, attendees who rolled with last-minute changes, and a volunteer crew running on caffeine and stubborn optimism.

Here’s the [2020 booklet](/assets/2020/booklet/booklet.pdf) if you want the original schedule in your hands.

## Cyber Escape Room: Critical Mass

One thing we’re still grinning about is **Critical Mass**, an escape-room experience backed by **CyberCX** and **Living Security**. We wanted something that wasn’t “death by PowerPoint” for security awareness: social engineering, sensitive data, phishing, physical access ideas, the messy stuff that actually shows up in real incidents.

## Presenters

Thank you to every speaker who made the day what it was.

<table class="presenters">
  {% for row in site.data.presenters-20 %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th><a href="#">{{ pair[0] }}</a></th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>

## Sponsors

These organisations helped us keep the lights on for **BSides Brisbane 2020**. We’re grateful.

![image](/assets/2020/sponsors/telstra.png#sponsor)
<br /><br />

![image](/assets/2020/sponsors/checkpoint.jpg#sponsor)
<br /><br />

![image](/assets/2020/sponsors/pwc.jpg#sponsor)
<br /><br />

![image](/assets/2020/sponsors/privasec.png#sponsor)
<br /><br />

![image](/assets/2020/sponsors/sophos.png#sponsor)
<br /><br />

![image](/assets/2020/sponsors/equate.png#sponsor)
<br /><br />

![image](/assets/2020/sponsors/cybercx.png#sponsor)
<br /><br />

![image](/assets/2020/sponsors/decipher.gif#sponsor)
<br /><br />

## Snaps from the day

A few favourites from the floor. There are more in the folder if we expand this post later.

{% for image in page.images %}
![image](/assets/2020/photos/{{ image }})
<br /><br />
{% endfor %}
