---
layout: post
title: "Dual tracks, a decompilation keynote, and workshop rooms: BSides Brisbane 2024"
tags: conference wrap-up
published: true
images:
    - 1.jpg
    - 2.jpg
    - 3.jpg
    - 4.jpg
    - 5.jpg
---

**Saturday 13 July 2024**, back at **QUT Gardens Point** in **Z Block**. For us behind the scenes, the day was a juggling act: **Track 1** in **GP-Z-411**, **Track 2** in **GP-Z-401**, workshops humming in the side rooms, **Nomad**’s **CTF** winding up before Josh and Brodie brought it home at close-out.

We were lucky to host **Dr Cristina Cifuentes** for the keynote. **Decompilation** isn’t something you see every week, and the talk landed exactly the way we hoped: technical, historical, and still relevant to the tools people use today.

Alongside the two tracks we had **hands-on corners** that matched the energy of the talks: **hardware / PLC-style** challenges (and badge RF Easter eggs if you read the booklet), **DFIR** and **APNIC** workshop space, and a **CTF** that mixed jeopardy boards with an **Active Directory**-flavoured lab for teams that wanted something closer to day-job tradecraft.

## The numbers we’re carrying forward

We closed ticketing with **696** of you registered, and **504** check-ins on the day. **Eleven** sponsors stepped up, although we were down on dollars compared to a few years prior (roughly **half** of what we saw in **2023**), which honestly stung when we were dreaming up venue dressing and extra touches. What we *did* raise covered the essentials: core costs, **swag**, and **t-shirts**, and we’re grateful for every logo on that list.

**Queensland Government** came in as **Platinum** again: not just funding, but **in-kind** help too. That meant promotion through state channels (including boosting visibility for folks on the funded **Certificate IV** cyber pathway), and people from the public sector side joining workshops and hallway conversations. That partnership made a real difference; we’re hoping it keeps rolling into future years.

If you want the artefact we printed for the day, here’s the **[2024 booklet](/assets/2024/booklet/booklet.pdf)**.

## Presenters

Thank you to everyone who spoke. You built the heart of the conference.

<table class="presenters">
  {% for row in site.data.presenters-24 %}
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

Below are the sponsors. Thank you, all of you, for backing **BSides Brisbane 2024**.

![image](/assets/2024/qgov-dark.png#sponsor)
<br /><br />

![image](/assets/2024/mcgrathnicol-dark.svg#sponsor)
<br /><br />

![image](/assets/2024/sekuro-dark.png#sponsor)
<br /><br />

![image](/assets/2024/payatu-dark.png#sponsor)
<br /><br />

![image](/assets/2024/cybercx-dark.png#sponsor)
<br /><br />

![image](/assets/2024/crest-dark.png#sponsor)
<br /><br />

![image](/assets/2024/deiterate-dark.png#sponsor)
<br /><br />

![image](/assets/2024/netskope-dark.png#sponsor)
<br /><br />

![image](/assets/2024/pa-dark.png#sponsor)
<br /><br />

![image](/assets/2024/cybersec_people.png#sponsor)
<br /><br />

![image](/assets/2024/talenza-dark.svg#sponsor)
<br /><br />

## Photos from the day

A handful of moments we’re happy to have saved from **2024**.

{% for image in page.images %}
![image](/assets/2024/photos/{{ image }})
<br /><br />
{% endfor %}
