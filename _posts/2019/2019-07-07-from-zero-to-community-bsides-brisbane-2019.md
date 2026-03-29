---
layout: post
title: "From zero to community: BSides Brisbane 2019"
tags: conference wrap-up
published: true
permalink: /recent/2019/07/07/Thats-a-wrap-2019.html
---

July 2019 still feels like yesterday for some of us on the crew: the first time we put **BSides Brisbane** on the calendar, not really knowing if anyone would care. Turns out they did. About **300 of you** walked into **QUT Gardens Point** for a day we’d been sketching on whiteboards and Discord for months.

What we wanted was simple on paper and hard in practice: a **community-run** security conference with room for honest technical talks, actual conversations in the hallways, and sideshows (including CTF-style challenges) that didn’t feel bolted on. The feedback we got back then (great talks, great people, space for newcomers as well as old hands) is still the bar we measure ourselves against.

If you want to wander down memory lane, we’ve kept the [2019 booklet](/assets/2019/booklet/booklet.pdf) online.

## Who spoke

Huge thanks to everyone who got on stage for our very first programme. If you’re hunting slides or recordings, your best bet is still to reach out to speakers directly. Availability varies year to year.

<table class="presenters">
  {% for row in site.data.presenters-19 %}
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

We couldn’t have launched without organisations willing to back an unproven idea. Thank you, sincerely, to everyone who sponsored **BSides Brisbane 2019**.

![image](/assets/2019/sponsors/privasec.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/splunk.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/pwc.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/rapid7.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/tss.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/elastic.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/infosect.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/redhat.jpg#sponsor)
<br /><br />

![image](/assets/2019/sponsors/acumenis.jpg#sponsor)
<br /><br />
