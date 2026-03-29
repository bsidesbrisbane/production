---
layout: post
title: "Momentum, charity, and a deeper CTF: BSides Brisbane 2023"
tags: conference wrap-up
published: true
permalink: /recent/2023/07/22/Thats-a-wrap-2023.html
---

**2023** felt like the year the numbers caught up with the vibe: **478 tickets** sold and roughly **400** of you checking in on the day, strong for a time when plenty of people were still figuring out how they felt about crowded rooms.

What we loved when we looked around the venue was the **mix**: students, architects, SOC analysts, career-changers, old friends. We’re not trying to run a single-track vendor story. We’re trying to run **Brisbane’s** BSides, and days like that remind us we’re on the right track.

## Presenters

Huge thank you to our speakers. You set the tone for the whole event.

<table class="presenters">
  {% for row in site.data.presenters-23 %}
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

## VetsInCyber × BrothersNBooks

This year we also teamed up with [VetsInCyber](https://vetsincyber.com.au/) and [BrothersNBooks](https://brothersnbooks.com/) on a book drive for service members, hospitals, and community libraries: reading as wellbeing, and as an on-ramp into security careers. Between all of you who chipped in, we got **around 20 books** moving to where they’d do some good.

## Capture the Flag & hardware village

**Nomad** ran the CTF again: jeopardy-style challenges plus a dedicated **Active Directory** track for teams who wanted something closer to “real work.” On the side, the **hardware village** kept things tactile: boards to poke at, flags to hunt, and plenty of “just one more try” energy.

## Sponsors

These sponsors helped us run **BSides Brisbane 2023**. Thank you.

![image](/assets/2023/sponsors/sekuro.jpg#sponsor)
<br /><br />

![image](/assets/2023/sponsors/payatu.jpg#sponsor)
<br /><br />

![image](/assets/2023/sponsors/cybercx.jpg#sponsor)
<br /><br />

![image](/assets/2023/sponsors/cybersecpeople.jpg#sponsor)
<br /><br />

![image](/assets/2023/sponsors/securestack.jpg#sponsor)
<br /><br />

![image](/assets/2023/sponsors/art.jpg#sponsor)
<br /><br />

![image](/assets/2023/sponsors/talenza.jpg#sponsor)

## Photos from the day

CTF and hardware village snaps from **2023**.

![image](/assets/2023/ctf/hardware.jpg)
<br /><br />

![image](/assets/2023/ctf/scoreboard.jpg)
<br /><br />

![image](/assets/2023/ctf/timeline.jpg)
<br /><br />
