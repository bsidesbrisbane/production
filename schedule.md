---
layout: page
title: Schedule
permalink: /schedule/
---

<style>
    /* Add your custom CSS styles here */
    .schedule-table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }
    .schedule-table th, .schedule-table td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ddd;
        vertical-align: top;
    }
    .schedule-table tbody tr {
        height: 65px;
    }
    .schedule-table th {
        background-color: #2c2c2c;
        color: #f1f1f1;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 0.9em;
        border: 1px solid #444;
        border-bottom-width: 3px;
    }
    .schedule-table thead .time-col {
        /* This column doesn't have a special color, so it gets the default dark underline */
    }
    #track1-header {
        border-bottom-color: #f24784;
    }
    #track2-header {
        border-bottom-color: rgba(2,245,255,1);
    }
    .time-col {
        width: 10%;
        font-weight: bold;
    }
    .track-col {
        width: 45%;
    }

    .talk {
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .talk.track1 {
        background-color: rgba(242, 71, 132, 0.1);
        border-left: 5px solid #f24784;
    }

    .talk.track2 {
        background-color: rgba(2, 245, 255, 0.1);
        border-left: 5px solid rgba(2,245,255,1);
    }

    .talk.break {
        background:rgba(217, 157, 85, 0.1);
        border-left: 5px solid rgba(217, 157, 85, 1);
    }

    .talk.track1-only {
        background: repeating-linear-gradient(
            -45deg,
            rgba(80, 80, 80, 0.12),
            rgba(80, 80, 80, 0.12) 6px,
            rgba(50, 50, 50, 0.06) 6px,
            rgba(50, 50, 50, 0.06) 12px
        );
        border-left: 5px solid #666;
        cursor: default;
        color: #888;
    }

    .talk.track1-only .talk-title {
        color: #777;
        font-weight: 600;
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .talk-title {
        font-weight: bold;
    }
    .talk-presenter {
        font-style: italic;
    }
    .talk.track1 .talk-presenter {
        color: #b33e6f;
    }
    .talk.break .talk-presenter {
        color: rgba(85, 145, 217, 1)
    }
    .talk.track2 .talk-presenter {
        color: #02a8b3;
    }

    .popup-trigger {
        display: block;
        height: 100%;
    }

    .popup-summary {
        background: rgba(44, 44, 44, 0.95); /* A dark, slightly transparent background */
        color: #f1f1f1;
        padding: 25px;
        width: auto;
        max-width: 600px;
        margin: 20px auto;
        position: relative;
        border-radius: 8px;
    }

    .popup-summary.popup-track1 {
        border: 1.5px solid #f24784;
        box-shadow: 0 0 20px rgba(242, 71, 132, 0.5);
    }

    .popup-summary.popup-track2 {
        border: 1px solid rgba(2, 245, 255, 1);
        box-shadow: 0 0 20px rgba(2, 245, 255, 0.5);
    }

    .popup-summary.popup-break {
        border: 1px solid rgba(217, 157, 85, 1);
        box-shadow: 0 0 20px rgba(217, 157, 85, 0.5);
    }

    .popup-summary h3 {
        color: #fff;
        margin-top: 0;
        padding-bottom: 10px;
    }

    .popup-summary.popup-track1 h3 {
        border-bottom: 1px solid #f24784;
    }

    .popup-summary.popup-track2 h3 { 
        border-bottom: 1px solid rgba(2, 245, 255, 1);
    }
    .popup-section {
        margin-top: 20px;
    }
    .popup-section h4 {
        margin: 0 0 5px 0;
        font-size: 1.1em;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .presenter-info {
        font-style: italic;
        color: #ccc;
    }
    .mc-profile {
        display: flex;
        align-items: center;
        gap: 0.5em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        justify-content: center;
    }
    .mc-tag {
        display: inline-block;
        padding: 0.15em 0.5em;
        border-radius: 0.25em;
        background-color: rgba(242, 71, 132, 0.2);
        border: 1px solid #f24784;
        color: #f24784;
        font-size: 0.75em;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        line-height: 1.4;
    }
    .mc-name {
        font-weight: 600;
        color: #f24784;
        text-decoration: none;
        font-size: 1em;
        cursor: pointer;
    }
    .mc-profile.track2 .mc-name {
        color: #02a8b3;
    }
    .mc-name:hover {
        text-decoration: underline;
    }
    .mc-popup {
        display: none;
        background: rgba(44, 44, 44, 0.95);
        color: #f1f1f1;
        padding: 25px;
        width: auto;
        max-width: 400px;
        margin: 20px auto;
        position: fixed;
        left: 0; right: 0; top: 20vh;
        z-index: 9999;
        border-radius: 8px;
        border: 2px solid #f24784;
        box-shadow: 0 0 20px rgba(242, 71, 132, 0.5);
        text-align: center;
    }
    .mc-popup.track2 {
        border: 2px solid rgba(2,245,255,1);
        box-shadow: 0 0 20px rgba(2, 245, 255, 0.5);
    }
    .mc-popup .mc-popup-close {
        position: absolute;
        top: 8px;
        right: 16px;
        color: #fff;
        font-size: 1.5em;
        cursor: pointer;
    }
    .mc-popup .mc-popup-avatar {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #f24784;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        margin-bottom: 0.75em;
    }
    .mc-popup .mc-popup-bio {
        margin-top: 1em;
        font-size: 1em;
    }
    .mc-popup .mc-popup-link {
        display: inline-block;
        margin-top: 1em;
        color: #fff;
        background: #f24784;
        padding: 0.4em 1em;
        border-radius: 0.5em;
        text-decoration: none;
        font-weight: bold;
    }
    .mc-popup.track2 .mc-popup-link {
        background: #02a8b3;
    }
    .mc-popup .mc-popup-link:hover {
        text-decoration: underline;
    }
</style>

<div id="schedule-content" style="display: none;">
    <h2>Schedule</h2>
    <p>Please note this schedule is still in a draft state and is subject to change.</p>

    <table class="schedule-table">
        <thead>
            <tr>
                <th class="time-col">Time</th>
                <th id="track1-header" class="track-col">Track 1
                    <div class="mc-profile track1">
                        <span class="mc-tag">MC</span>
                        <span class="mc-name mc-popup-trigger" data-mc="1">Kelsy Luengen</span>
                    </div>
                </th>
                <th id="track2-header" class="track-col">Workshops</th>
            </tr>
        </thead>
        <tbody>
            {% for slot in site.data.schedule %}
            <tr>
                <td>{{ slot.time }}</td>
                {% if slot.track1.title %}
                    {% assign talk = slot.track1 %}
                    <td class="track-cell" {% if talk.rowspan %}rowspan="{{ talk.rowspan }}"{% endif %} {% if talk.colspan %}colspan="{{ talk.colspan }}"{% endif %}>
                        {% if talk.summary %}
                        <a href="#summary-{{ forloop.index }}-1" class="popup-trigger">
                        {% endif %}
                            <div class="talk track1{% if talk.type == 'break' %} break{% endif %}">
                                <div class="talk-title">{{ talk.title }}</div>
                                <div class="talk-presenter">{{ talk.presenter }}</div>
                                <div class="talk-duration">{{ talk.duration }}</div>
                            </div>
                        {% if talk.summary %}
                        </a>
                        <div id="summary-{{ forloop.index }}-1" class="mfp-hide popup-summary{% if talk.type == 'break' %} popup-break{% else %} popup-track1{% endif %}">
                            <h3>{{ talk.title }}</h3>
                            {% if talk.type == 'break' %}
                                <p>{{ talk.summary }}</p>
                            {% else %}
                                <p class="presenter-info">
                                    <strong>Presented by:</strong> 
                                    {% if talk.link and talk.link != "" %}
                                        <a href="{{ talk.link }}" target="_blank" rel="noopener noreferrer">{{ talk.presenter }}</a>
                                    {% else %}
                                        {{ talk.presenter }}
                                    {% endif %}
                                </p>
                                
                                {% if talk.summary and talk.summary != "Placeholder" %}
                                <div class="popup-section">
                                    <h4>Talk Summary</h4>
                                    <div>{{ talk.summary | markdownify }}</div>
                                </div>
                                {% endif %}

                                {% if talk.bio and talk.bio != "Placeholder" %}
                                <div class="popup-section">
                                    <h4>Speaker Bio</h4>
                                    <p>{{ talk.bio }}</p>
                                </div>
                                {% endif %}
                            {% endif %}
                        </div>
                        {% endif %}
                    </td>
                {% elsif slot.track1_empty %}
                    <td></td>
                {% endif %}

                {% comment %} Logic for Track 2: show second column whenever track 1 is not full-width (colspan 2). Omitting colspan or using colspan 1 is dual-track mode. {% endcomment %}
                {% unless slot.track1.colspan == 2 %}
                    {% if slot.track2.title %}
                        {% assign talk = slot.track2 %}
                        <td class="track-cell" {% if talk.rowspan %}rowspan="{{ talk.rowspan }}"{% endif %} {% if talk.colspan %}colspan="{{ talk.colspan }}"{% endif %}>
                            {% if talk.summary and talk.type != 'track1-only' %}
                            <a href="#summary-{{ forloop.index }}-2" class="popup-trigger">
                            {% endif %}
                                <div class="talk track2{% if talk.type == 'break' %} break{% elsif talk.type == 'track1-only' %} track1-only{% endif %}">
                                    <div class="talk-title">{{ talk.title }}</div>
                                    {% unless talk.type == 'track1-only' %}
                                    <div class="talk-presenter">{{ talk.presenter }}</div>
                                    {% endunless %}
                                    <div class="talk-duration">{{ talk.duration }}</div>
                                </div>
                            {% if talk.summary and talk.type != 'track1-only' %}
                            </a>
                            <div id="summary-{{ forloop.index }}-2" class="mfp-hide popup-summary{% if talk.type == 'break' %} popup-break{% else %} popup-track2{% endif %}">
                                <h3>{{ talk.title }}</h3>
                                {% if talk.type == 'break' %}
                                    <p>{{ talk.summary }}</p>
                                {% else %}
                                    <p class="presenter-info">
                                        <strong>Presented by:</strong> 
                                        {% if talk.link and talk.link != "" %}
                                            <a href="{{ talk.link }}" target="_blank" rel="noopener noreferrer">{{ talk.presenter }}</a>
                                        {% else %}
                                            {{ talk.presenter }}
                                        {% endif %}
                                    </p>
                                    
                                    {% if talk.summary and talk.summary != "Placeholder" %}
                                    <div class="popup-section">
                                        <h4>Workshop Summary</h4>
                                        <div>{{ talk.summary | markdownify }}</div>
                                    </div>
                                    {% endif %}

                                    {% if talk.bio and talk.bio != "Placeholder" %}
                                    <div class="popup-section">
                                        <h4>Tutor Bio</h4>
                                        <p>{{ talk.bio }}</p>
                                    </div>
                                    {% endif %}
                                {% endif %}
                            </div>
                            {% endif %}
                        </td>
                    {% elsif slot.track2 %}
                        <td></td>
                    {% endif %}
                {% endunless %}
            </tr>
            {% endfor %}
        </tbody>
    </table>
    <br /><br /><br />
</div>
<div id="mc-popup-1" class="mc-popup track1">
    <span class="mc-popup-close" onclick="document.getElementById('mc-popup-1').style.display='none'">&times;</span>
    <img src="/assets/2026/avatar/kelsy.jfif" alt="Kelsy Luengen" class="mc-popup-avatar" />
    <h3>Kelsy Luengen</h3>
    <div class="mc-popup-bio">
        Kelsy Luengen is a security behaviour specialist and researcher, recently submitting her PhD in security-focused behavioural sciences. As a Security Influencer, she drives positive behaviour change and strengthens security culture through engaging campaigns, training, and evidence-based methods. Kelsy excels at translating complex cyber threats into plain English, designing impactful awareness programs, and leading high-risk training initiatives across the Asia-Pacific region. Her doctoral research explores how people respond to cyber security nudges, using eye-tracking to understand threat recognition and protective behaviours. With over 14 years of teaching, training, and coaching experience, Kelsy is passionate about stakeholder engagement, data-driven campaigns, and making security accessible for all.
    </div>
    <a class="mc-popup-link" href="https://www.linkedin.com/in/kelsy-luengen-a26209110//" target="_blank" rel="noopener noreferrer">View LinkedIn</a>
</div>
<script>

$(document).ready(function() {
    $('#schedule-content').show();
    $('.popup-trigger').magnificPopup({
        type:'inline',
        midClick: true
    });
});
document.querySelectorAll('.mc-popup-trigger').forEach(function(el) {
    el.addEventListener('click', function() {
        var mc = el.getAttribute('data-mc');
        var popup = document.getElementById('mc-popup-' + mc);
        if (popup) popup.style.display = 'block';
    });
});
</script>