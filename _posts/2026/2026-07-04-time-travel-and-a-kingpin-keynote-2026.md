---
layout: post
title: "Time Travel and a Kingpin keynote: BSides Brisbane 2026"
tags: conference wrap-up
published: true
---

**Saturday 4 July 2026**, back at **QUT Gardens Point** in **Z Block**. The theme this year was **Time Travel**: past, present, and future of cyber security in the same building, on the same Saturday, with the usual mix of people who actually *do* the work sitting next to people still figuring out if this is their scene.

We opened the day with someone we’ve wanted on a BSides Brisbane stage for a long time.

## Keynote: Joe Grand

**Joe Grand** (Kingpin to a lot of the room) flew in to open **BSides Brisbane 2026** with **[Hacks Under Pressure](https://grandideastudio.com/portfolio/library/hacks-under-pressure/)**. If you know the name, you know the résumé: **L0pht Heavy Industries**, **Prototype This** on Discovery Channel, and a career spent taking electronic devices apart, putting them back together, and teaching other people how to do the same.

The talk lived up to the title. Joe’s spent years on jobs where “doing it live” wasn’t a metaphor: **cryptocurrency wallets** worth real money, prototypes that had to work **on the streets of San Francisco**, an audience watching, and no useful version of “can we take that again?” Inspired by Rush’s *Grace Under Pressure*, he walked through the hacks that squeezed him the hardest, and the results that didn’t always look like the plan.

This is the one you turn up early for. If you missed it, or you want to sit with it again, Joe has put the slides up on [Grand Idea Studio](https://grandideastudio.com/portfolio/library/hacks-under-pressure/). Thank you, Joe, for making the trip and for kicking the day off properly.

## Dual tracks, workshops, and the rest of the day

After the keynote the programme split the way it should: **Track 1** and **Track 2** running in parallel, talks ranging from **ICS purple teaming** and **EV charger RCE** through to **GRC**, **EDR**, **SS7**, and a couple of sessions that refused to stay in a neat box. On the workshop side, **Warren Finch** had people mapping fibre and facilities in **QGIS / Google Earth**, and **Chris Djamaludin** ran the **competitive tabletop** twice so more of you could get a seat at the decision table.

**Nomad**’s **CTF** was in the mix again, with results called before close-out. Same energy as always: headphones on, last-minute flags, and a room that didn’t really empty until we made it empty.

We’ll drop a link to the **printed booklet** in this section once we’ve archived the final PDF alongside the other years.

## Presenters

Huge thanks to this year’s speakers. You raised the bar again, and you made a Kingpin keynote feel like the start of the conversation rather than the whole show.

<table class="presenters">
  {% for row in site.data.presenters-26 %}
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

We’re deeply grateful to everyone who supported **BSides Brisbane 2026**. This event doesn’t happen without you.

![image](/assets/2026/sponsors/quadcarbon-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/qgov-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/acumenis-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/sekuro-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/packagedit-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/t1-dark.svg#sponsor)
<br /><br />

![image](/assets/2026/sponsors/signal11-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/isoc-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/blarge-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/qut-dark.png#sponsor)
<br /><br />

![image](/assets/2026/sponsors/feind-dark.png#sponsor)
<br /><br />
