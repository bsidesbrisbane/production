---
layout: post
title: "Two years, one stage: BSides Brisbane finally lands in 2022"
tags: conference wrap-up
published: true
permalink: /recent/2022/07/22/Thats-a-wrap-2021-22.html
images: 
    - 1.jpg
    - 2.jpg
    - 3.jpg
    - 4.jpg
    - 5.jpg
---

Our 2021 event didn’t survive the lockdown calendar, so when we finally opened the doors, we were really running **two years of pent-up energy** in a single day that covered both **2021** and **2022**. **390 tickets** went out, and honestly? You could feel it in the room: people who hadn’t caught up in person for ages, students next to grizzled IR folks, and a programme that didn’t shy away from depth.

For us as organisers, that day was part relief, part “don’t screw this up.” Looking back, you made it easy to remember why we do it.

Grab the [2022 booklet](/assets/2022/booklet/booklet.pdf) if you want the original timings and room names.

## Presenters

Big thanks to everyone who pitched a talk and held the line on quality.

<table class="presenters">
  {% for row in site.data.presenters-22 %}
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

## Capture the Flag (Nomad)

**Nomad** delivered the goods again: **10,850** points across **48** challenges, **36** teams, and something like **1.6 million** requests hammering the CTF infra over the day. It was loud, it was silly, and it was exactly the kind of chaos we like.

**First: Power Puff Girls**  
Winner mugs, electronics kits, Hak5 voucher ($150), Proxmark, Chameleon, PentesterLab (6 months ×4).

**Second: 0xb00b135**  
Arduino starter kit, Yard Stick, Hak5 voucher ($100), Proxmark, Chameleon, PentesterLab (6 months ×4).

**Third: Team Name**  
Arduino starter kit, Yard Stick, Hak5 voucher ($50), PentesterLab (3 months ×4).

## Sponsors

We mean it when we say we couldn’t do this without you. Here’s who backed **BSides Brisbane 2022**.

![image](/assets/2022/sponsors/sekuro.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/merimetso.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/okta.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/dragos.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/radiant.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/securestack.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/cybersecpeople.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/yeswehack.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/securecodewarrior.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/cybercx.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/hak5.jpg#sponsor)
<br /><br />

![image](/assets/2022/sponsors/pentesterlab.jpg#sponsor)

## Photos from the day

How the CTF scoreboard looked when the dust settled, then five shots from the floor. Thanks to everyone who lets us point a camera at them.

![image](/assets/2022/ctf/timeline.jpg)
<br /><br />

{% for image in page.images %}
![image](/assets/2022/photos/{{ image }})
<br /><br />
{% endfor %}
