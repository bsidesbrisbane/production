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
</style>

<div id="schedule-content" style="display: none;">
    <h2>Schedule</h2>
    <p>Please note this schedule is still in a draft state and is subject to change.</p>

    <table class="schedule-table">
        <thead>
            <tr>
                <th class="time-col">Time</th>
                <th id="track1-header" class="track-col">Track 1</th>
                <th id="track2-header" class="track-col">Track 2</th>
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
                                
                                {% if talk.bio and talk.bio != "Placeholder" %}
                                <div class="popup-section">
                                    <h4>Speaker Bio</h4>
                                    <p>{{ talk.bio }}</p>
                                </div>
                                {% endif %}

                                {% if talk.summary and talk.summary != "Placeholder" %}
                                <div class="popup-section">
                                    <h4>Talk Summary</h4>
                                    <div>{{ talk.summary | markdownify }}</div>
                                </div>
                                {% endif %}
                            {% endif %}
                        </div>
                        {% endif %}
                    </td>
                {% endif %}

                {% comment %} Logic for Track 2 {% endcomment %}
                {% if slot.track1.colspan == nil %}
                    {% if slot.track2.title %}
                        {% assign talk = slot.track2 %}
                        <td class="track-cell" {% if talk.rowspan %}rowspan="{{ talk.rowspan }}"{% endif %} {% if talk.colspan %}colspan="{{ talk.colspan }}"{% endif %}>
                            {% if talk.summary %}
                            <a href="#summary-{{ forloop.index }}-2" class="popup-trigger">
                            {% endif %}
                                <div class="talk track2{% if talk.type == 'break' %} break{% endif %}">
                                    <div class="talk-title">{{ talk.title }}</div>
                                    <div class="talk-presenter">{{ talk.presenter }}</div>
                                    <div class="talk-duration">{{ talk.duration }}</div>
                                </div>
                            {% if talk.summary %}
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
                                    
                                    {% if talk.bio and talk.bio != "Placeholder" %}
                                    <div class="popup-section">
                                        <h4>Speaker Bio</h4>
                                        <p>{{ talk.bio }}</p>
                                    </div>
                                    {% endif %}

                                    {% if talk.summary and talk.summary != "Placeholder" %}
                                    <div class="popup-section">
                                        <h4>Talk Summary</h4>
                                        <div>{{ talk.summary | markdownify }}</div>
                                    </div>
                                    {% endif %}
                                {% endif %}
                            </div>
                            {% endif %}
                        </td>
                    {% elsif slot.track2 %}
                        <td></td>
                    {% endif %}
                {% endif %}
            </tr>
            {% endfor %}
        </tbody>
    </table>
    <br /><br /><br />
</div>
<script>
// Lol, don't do this- only meant for obfuscation while drafting schedule.
$(document).ready(function() {
    $('#schedule-content').show();
    $('.popup-trigger').magnificPopup({
        type:'inline',
        midClick: true
    });
});
</script>