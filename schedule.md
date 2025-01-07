---
layout: page
title: Schedule
permalink: /schedule/
---

<head>
<style>
    /* Add your custom CSS styles here */
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        text-align: left;
    }
    #track1 th {
        background-image: linear-gradient(#f24784, #fc985e);
    }
    #track2 th {
        background-image: linear-gradient(rgba(2,245,255,1), rgba(255,94,247,1));
    }
    #track3 th {
        background-image: linear-gradient(rgba(149,159,10,1), rgba(106,96,245,1));
    }
    #track1 tr:nth-child(even):hover {
        background-image: linear-gradient(#f24784, #fc985e);
    }
    #track1 tr:nth-child(odd):hover {
        background-image: linear-gradient(#f24784, #fc985e);
    }
    #track2 tr:nth-child(even):hover {
        background-image: linear-gradient(rgba(2,245,255,1), rgba(255,94,247,1));
    }
    #track2 tr:nth-child(odd):hover {
        background-image: linear-gradient(rgba(2,245,255,1), rgba(255,94,247,1));
    }
    #track3 tr:nth-child(even):hover {
        background-image: linear-gradient(rgba(149,159,10,1), rgba(106,96,245,1));
    }
    #track3 tr:nth-child(odd):hover {
        background-image: linear-gradient(rgba(149,159,10,1), rgba(106,96,245,1));
    }
    .tooltip {
        position: relative;
        display: inline-block;
    }
    #track1 .tooltip .tooltiptext {
        visibility: hidden;
        width: 350px;
        background-color: #fc985e;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
    }
    #track2 .tooltip .tooltiptext {
        visibility: hidden;
        width: 350px;
        background-color: rgba(255,94,247,1);
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
    }
    #track3 .tooltip .tooltiptext {
        visibility: hidden;
        width: 350px;
        background-color: rgba(106,96,245,1);
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
    }
    #track1 .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
    #track2 .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
    #track3 .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>
</head>
<body onload="openTrack('track1')">
<h2>Schedule</h2>
<p>TBC</p>

<!--
<p>Please note this schedule is still in a draft state and is subject to change.</p>
-->

<br />

<!-- Tabs for the two tracks -->
<!--
<div class="tabs">
    <button class="trackbtn1" style="vertical-align:middle" onclick="openTrack('track1')"><span>Track 1</span></button>
    <button class="trackbtn2" style="vertical-align:middle" onclick="openTrack('track2')"><span>Track 2</span></button>
    <button class="trackbtn3" style="vertical-align:middle" onclick="openTrack('track3')"><span>Workshops</span></button>
</div>

<!-- Content for Track 1 -->
<!--
<div id="track1" class="tabcontent">
    <h2>Track 1 Sessions</h2>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Speaker</th>
                <th>Talk Title</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>08:00</td>
                <td></td>
                <td class="tooltip">Doors and Check In Open
                </td>
                <td>All day</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Content for Track 2 -->
<!--
<div id="track2" class="tabcontent">
    <h2>Track 2 Sessions</h2>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Speaker</th>
                <th>Talk Title</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>08:00</td>
                <td></td>
                <td class="tooltip">
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Content for Track 3 -->
<!--
<div id="track3" class="tabcontent">
    <h2>Workshop Sessions</h2>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Tutor</th>
                <th>Workshop Title</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>08:00</td>
                <td></td>
                <td class="tooltip"></td>
                <td>All day</td>
            </tr>
        </tbody>
    </table>
</div>


-->
<!-- JavaScript to handle tab switching -->
<script>
    function openTrack(trackName) {
        const tabContents = document.getElementsByClassName("tabcontent");
        for (const content of tabContents) {
            content.style.display = "none";
        }
        document.getElementById(trackName).style.display = "block";
    }
</script>

<br />
<br />