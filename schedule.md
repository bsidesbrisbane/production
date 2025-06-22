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
    .schedule-table thead .time-col {
        color: #333;
    }
    #track1-header {
        background-image: linear-gradient(#f24784, #c93a6a);
        color: white;
    }
    #track2-header {
        background-image: linear-gradient(rgba(2,245,255,1), rgba(2,197,204,1));
        color: white;
    }
    .time-col {
        width: 10%;
        font-weight: bold;
    }
    .track-col {
        width: 45%;
    }

    .track-cell {
        padding: 0;
    }

    .popup-trigger {
        display: block;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        text-decoration: none;
        color: inherit;
    }

    .talk {
        padding: 8px;
        margin-bottom: 0;
        border-radius: 5px;
        cursor: pointer;
        height: 100%;
    }

    .talk.track1 {
        background-color: rgba(242, 71, 132, 0.1);
        border-left: 5px solid #f24784;
    }

    .talk.track2 {
        background-color: rgba(2, 245, 255, 0.1);
        border-left: 5px solid rgba(2,245,255,1);
    }
    .talk-title {
        font-weight: bold;
    }
    .talk-presenter {
        font-style: italic;
    }

    .popup-summary {
        background: #2c2c2c;
        color: #f1f1f1;
        padding: 25px;
        width: auto;
        max-width: 600px;
        margin: 20px auto;
        position: relative;
        border-radius: 8px;
    }
    .popup-summary h3 {
        color: #fff;
        margin-top: 0;
        border-bottom: 1px solid #555;
        padding-bottom: 10px;
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
                            <div class="talk track1">
                                <div class="talk-title">{{ talk.title }}</div>
                                <div class="talk-presenter">{{ talk.presenter }}</div>
                                <div class="talk-duration">{{ talk.duration }}</div>
                            </div>
                        {% if talk.summary %}
                        </a>
                        <div id="summary-{{ forloop.index }}-1" class="mfp-hide popup-summary">
                            <h3>{{ talk.title }}</h3>
                            <p><strong>Presenter:</strong> {{ talk.presenter }}</p>
                            <p>{{ talk.summary }}</p>
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
                                <div class="talk track2">
                                    <div class="talk-title">{{ talk.title }}</div>
                                    <div class="talk-presenter">{{ talk.presenter }}</div>
                                    <div class="talk-duration">{{ talk.duration }}</div>
                                </div>
                            {% if talk.summary %}
                            </a>
                            <div id="summary-{{ forloop.index }}-2" class="mfp-hide popup-summary">
                                <h3>{{ talk.title }}</h3>
                                <p><strong>Presenter:</strong> {{ talk.presenter }}</p>
                                <p>{{ talk.summary }}</p>
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
</div>
<br /><br /><br />
<script>
// Lol, don't do this- only meant for obfuscation while drafting schedule.
$(document).ready(function() {
    var pw = "V2hhdEFHcmVhdENsaWVudFNpZGVQYXNzd29yZA==";

    var password = prompt("This schedule is in a draft state and requires a password to view.", "");

    if (password !== null && btoa(password) === pw) {
        $('#schedule-content').show();
        $('.popup-trigger').magnificPopup({
            type:'inline',
            midClick: true
        });
    } else {
        if (password !== null) { 
            alert("Incorrect password.");
        }
        $('.page-content .wrapper').html('<h1>Draft Schedule</h1><p>This content is not yet available.</p>');
    }
});
</script>