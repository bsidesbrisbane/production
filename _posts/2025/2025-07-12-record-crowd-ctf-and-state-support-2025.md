---
layout: post
title: "Our largest turnout yet: BSides Brisbane 2025 in the numbers"
tags: conference wrap-up
published: true
images:
    - 1.jpg
    - 2.jpg
    - 3.jpg
    - 4.jpg
    - 5.jpg
---

**12 July 2025**, **QUT Gardens Point**, **Z Block**. Another year, another early start for the volunteer crew and another line at registration before the tracks kicked off.

We’ll remember **2025** as our **biggest day so far**: about **749** of you through the door, **eighteen** talks across **two** tracks, **eleven** sponsors on the banner, and **five** exhausted volunteers. The programme had a bit of everything (**research**, **identity**, **OT / shadow-OT**, **hunting**, **AppSec**, **AI risk**, **stego**, **IR**) because that’s who shows up to BSides: builders, defenders, leaders, and students, all in one building.

## CTF & hardware village

**Nomad**’s **CTF** was back: jeopardy-style challenges plus the **Active Directory** lab for teams that had pre-registered. The **hardware / IoT village** stayed in the mix too. There’s something about letting people **touch** the problem that slides alone can’t quite replace.

## Booklet

We’ll drop a link to the **printed booklet** in this section once we’ve archived the final PDF alongside the other years.

## Presenters

Huge thanks to this year’s speakers. You raised the bar again.

<table class="presenters">
  {% for row in site.data.presenters-25 %}
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

We’re deeply grateful to everyone who supported **BSides Brisbane 2025**, especially when budgets industry-wide are still tight.

![image](/assets/2025/sponsors/qgov-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/eeha-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/blarge-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/flametree-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/packagedit-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/rapid7-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/decipher-dark.gif#sponsor)
<br /><br />

![image](/assets/2025/sponsors/tarian-dark.svg#sponsor)
<br /><br />

![image](/assets/2025/sponsors/d5-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/qut-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/quadcarbon-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/cybercx-dark.png#sponsor)
<br /><br />

![image](/assets/2025/sponsors/crest-dark.png#sponsor)
<br /><br />

## Photos from the day

A few frames from **2025**:

{% for image in page.images %}
![image](/assets/2025/photos/{{ image }})
<br /><br />
{% endfor %}
