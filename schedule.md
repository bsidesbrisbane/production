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
    #track1 .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
    #track2 .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>
</head>
<body onload="openTrack('track1')">
<h2>Schedule</h2>
<p>This year we will be putting on two separate tracks of content across the day. Each session and track can be viewed below. More details available by hovering over the talk title.</p>

<p>Please note this schedule is still in a draft state and is subject to change.</p>

<br />

<!-- Tabs for the two tracks -->
<div class="tabs">
    <button class="trackbtn1" style="vertical-align:middle" onclick="openTrack('track1')"><span>Track 1</span></button>
    <button class="trackbtn2" style="vertical-align:middle" onclick="openTrack('track2')"><span>Track 2</span></button>
</div>

<!-- Content for Track 1 -->
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
            <tr>
                <td>08:45</td>
                <td>Josh & Brodie</td>
                <td class="tooltip">Welcome to BSides Brisbane 2024
                </td>
                <td>15 mins</td>
            </tr>
            <tr>
                <td>09:00</td>
                <td>Christina Cifuentes</td>
                <td class="tooltip">Keynote: From Student of Compilation to Mother of Decompilation -- 30 years edition
                    <span class="tooltiptext">In this keynote presentation, Christina will give a retrospective on her decompilation PhD work, the growing interest on this technology throughout the past three decades, examples of commercial uses of decompilation, and conclude with an application of decompilation to develop a malware analysis tool.</span>
                </td>
                <td>60 mins</td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>Brendan Scarvell</td>
                <td class="tooltip">Hacking the Netcomm NF20MESH Router ..again
                    <span class="tooltiptext">This presentation follows on from research performed on the Netcomm NF20 Mesh router presented at BSides Brisbane 2023. Brendan will walk through the methodology used to identify the vendor's fixes for the previous vulnerabilities, and how a bypass was identified which resulted in unauthenticated remote code execution.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>10:30</td>
                <td></td>
                <td class="tooltip">Morning Tea Break
                    <span class="tooltiptext">Grab a free coffee from the Cafe thanks to Ricki and the CyberSec People team!</span>
                </td>
                <td>15 mins</td>
            </tr>
            <tr>
                <td>10:45</td>
                <td>Ryan Williams</td>
                <td class="tooltip">Simboxes & Scams - The Long Road to SS7
                    <span class="tooltiptext">Ryan joins us to discussed the unauthorised utilisation of sim boxes (SIM banks), which are known to circumvent established telecommunication protocols, leading to substantial revenue deficits for telecom operators. These are the long-line trawlers of smishing campaigns globally and those we see arrested for sim box crime are just the tip of a very well organised and technically capable iceberg. Join Ryan, as he takes us back stage for a better look at the who, what and how of a little know global industry.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>11:15</td>
                <td>John Uhlmann</td>
                <td class="tooltip">Kernel ETW is the best ETW
                    <span class="tooltiptext">When Microsoft introduced Kernel Patch Protection, security vendors were constrained in their ability to monitor the kernel. Given the limited number of kernel extension points provided by Microsoft they were increasingly compelled to rely on asynchronous Event Tracing for Windows (ETW) events for after-the-fact visibility of kernel actions on behalf of malware. Given this reliance, the documentation of these telemetry sources is unfortunately somewhat sparse. To compensate I’ve needed to write or modify tools to overcome these limitations and uncover useful ETW events. With a focus on kernel telemetry, this talk will cover this multi-year journey and my open-source contributions to making ETW knowledge more accessible for security practitioners.</span>
                </td>
                <td>45 mins</td>
            </tr>
            <tr>
                <td>12:00</td>
                <td></td>
                <td class="tooltip">Lunch Time Break
                    <span class="tooltiptext">A number of lunch options are open around the campus.</span>
                </td>
                <td>60 mins</td>
            </tr>
            <tr>
                <td>13:00</td>
                <td>Cameron Fairbairn</td>
                <td class="tooltip">From Past to Present: The Evolution of Command and Control
                    <span class="tooltiptext">During this presentation, Cameron will explore the evolution of Command and Control (C2) traffic in cybersecurity through the lens of the MITRE ATT&CK framework and the evolution of adversary techniques.  Attendees will gain insights into the historical context, current strategies, and how understanding the MITRE ATT&CK framework enhances our ability to identify and mitigate C2 traffic, equipping them with a deeper understanding of this critical cybersecurity topic.</span>
                </td>
                <td>45 mins</td>
            </tr>
            <tr>
                <td>13:45</td>
                <td>Warren James</td>
                <td class="tooltip">Detection Engineering, the why's, what's and how it fits into the bigger picture
                    <span class="tooltiptext">What is detection engineering and why should I care? Ever wonder how those SOC alerts are created? This session will look into the topic of detection engineering, what it is comprised of and how it fits into the cyber landscape. Take a look at the basics of detection engineering and then follow a worked example from creation through to adversary simulation to production deployment.</span>
                </td>
                <td>60 mins</td>
            </tr>
            <tr>
                <td>14:45</td>
                <td>Andy Yang</td>
                <td class="tooltip">A Journey from Pentest to Red Team Operation
                    <span class="tooltiptext">The increasing recognition of the effectiveness of red teaming in mitigating security vulnerabilities and building resilience has led to a trend towards it in cybersecurity. This presentation provides a comprehensive exploration of the transition from traditional penetration testing to advanced Red Team Operations. It will offer insights to cybersecurity professionals who wish to move into the red team space and teach them how to prepare for the career path. The real-world story will also tell you how to build your red team capability.</span>
                </td>
                <td>45 mins</td>
            </tr>
            <tr>
                <td>15:30</td>
                <td></td>
                <td class="tooltip">Afternoon Tea Break
                    <span class="tooltiptext">Don't forget to hydrate!</span>
                </td>
                <td>15 mins</td>
            </tr>
            <tr>
                <td>15:45</td>
                <td>Jess 'GirlGerms' Dodson</td>
                <td class="tooltip">When it SIEMs like you're doing it all wrong…
                    <span class="tooltiptext">Are you a blue-teamer? Do you see yourself as working in SecOps or being a security analyst or engineer? Do you spend a lot of time in your SIEM and assorted security tools? Do you often think that you could be doing things better... or that your tools could be doing things better? If you answered yes to any of the above, this is the talk for you.</span>
                </td>
                <td>45 mins</td>
            </tr>
            <tr>
                <td>16:30</td>
                <td>Kaif Ahsan & Kumar Soorya</td>
                <td class="tooltip">Live Hacking Marathon: Breaking The Supply Chain
                    <span class="tooltiptext">Kaif and Soorya will be playing the characters of two hackers who are out to make a quick buck. They will perform 3 exploit demos on a fictional company "Everything Cyber", who’s supply chain is everything but secure. They will showcase how from a vulnerable open source library, to dependency confusion attacks, to misconfigured build pipelines, an attacker can compromise an application and gain access to the underlying environments infrastructure and production secrets. Each of the demos is representative of a type of supply chain attack and is inspired by real-life incidents.</span>
                </td>
                <td>60 mins</td>
            </tr>
            <tr>
                <td>17:30</td>
                <td>nomad</td>
                <td class="tooltip">CTF Close Out
                    <span class="tooltiptext">Final results presented for the CTF.</span>
                </td>
                <td>15 mins</td>
            </tr>
            <tr>
                <td>17:45</td>
                <td>Brodie & Josh</td>
                <td class="tooltip">Conference Close Out
                </td>
                <td>15 mins</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Content for Track 2 -->
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
            <tr>
                <td>08:45</td>
                <td></td>
                <td class="tooltip">
                </td>
                <td></td>
            </tr>
            <tr>
                <td>09:00</td>
                <td></td>
                <td class="tooltip">
                </td>
                <td></td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>Kelsey-Lee Stay</td>
                <td class="tooltip">There's a 'U' in security team
                    <span class="tooltiptext">Viewing everyone in the organisation as part of the security team is one of the most important approaches we can take in mitigating security risks.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>10:30</td>
                <td></td>
                <td class="tooltip">Morning Tea Break
                    <span class="tooltiptext">Grab a free coffee from the Cafe thanks to Ricki and the CyberSec People team!</span>
                </td>
                <td>15 mins</td>
            </tr>
            <tr>
                <td>10:45</td>
                <td>TBC</td>
                <td class="tooltip">TBC
                    <span class="tooltiptext">TBC.</span>
                </td>
                <td>45 mins</td>
            </tr>
            <tr>
                <td>11:30</td>
                <td>Ben Gittins</td>
                <td class="tooltip">Getting Comfortable in the Grey: an argument for generalists in cyber security
                    <span class="tooltiptext">This talk seeks to examine the unique advantages of teams of security generalists working alongside those of specialists. It will take attendees on a journey following the lifecycle and processes of generalist teams. It aims to promote an industry made up of people with diverse and unique backgrounds.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>12:00</td>
                <td></td>
                <td class="tooltip">Lunch Time Break
                    <span class="tooltiptext">A number of lunch options are open around the campus.</span>
                </td>
                <td>60 mins</td>
            </tr>
            <tr>
                <td>13:00</td>
                <td>Cole Cornford</td>
                <td class="tooltip">AppSec Tales and Fails
                    <span class="tooltiptext">Cole will tell tales about heroes and villains in the appsec discipline. Anyone who has worked in the space will see these people in their everyday roles. This talk is equal parts narrative and fun, as well as practical lessons so that you too don't fall into these tropes!</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>13:30</td>
                <td>Nick Young</td>
                <td class="tooltip">Cyber Security Strategy: A 3 Step Guide
                    <span class="tooltiptext">Cyber Security Strategy exists as the lesser-known sibling of red/blue team, GRC, and architecture. This session aims to simplify the process of building a security strategy by outlining a methodical approach to crafting a cyber security strategy in three straightforward steps.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>14:00</td>
                <td>Bec Caldwell</td>
                <td class="tooltip">Ecosystems of Safety: Pollen, Perspectives, and Predicting Cyber Threats
                    <span class="tooltiptext">This talk explores the diversity of risk in decision-making through a case study of an urban planning error that led to health issues for residents due to a lack of diversity. The same principle applies to cybersecurity, where a homogeneous approach can lead to vulnerabilities. The session emphasises the importance of diverse experiences and backgrounds in strengthening our security landscape. Just as a single type of tree caused city-wide health issues, a lack of diversity in cybersecurity can expose us to risks. Understanding how diversity can fortify the human aspect of security is key to improving security awareness.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>14:30</td>
                <td>Paul McCarty</td>
                <td class="tooltip">The "Holy Trinity" of Offensive Security Practices:  How bug bounty, penetration testing and red teaming can work together to deliver security "Nirvana" for your organisation
                    <span class="tooltiptext">Offensive security, a proactive approach to identifying IT vulnerabilities, involves different ways to essentially "hack yourself". Offensive security is becoming more prevalent as cyberattacks increase and organizations look for ways to stay ahead of the bad guys. It includes three major practices: penetration testing, bug bounty programs, and red teaming. Penetration testing uncovers vulnerabilities in a system over a set period, while red teaming emulates real-world attacks on specific systems. Bug bounty programs involve external researchers identifying vulnerabilities for cash rewards. These three practices, can be leveraged by organizations together to deliver some really amazing results.  When done right, I call this ecosystem the "holy trinity of offensive security," as it provides valuable insights and help secure systems against potential threats.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
            <td>15:00</td>
                <td>Kristine Sihto</td>
                <td class="tooltip">Clash of the Jargon - Simplify for understanding
                    <span class="tooltiptext">Jargon. It's bad. And it's everywhere. Not just cybersecurity - every sector, every industry, every business has its own brand of jargon. And sometimes, they war. Specialised terminology may be holding you back from real communication. Sometimes, cybersecurity people can't even understand other cybersecurity people! Kristine will dive into the great abyss of ever-expanding acronyms and terms and explain how to build connection with real people.</span>
                </td>
                <td>30 mins</td>
            </tr>
            <tr>
                <td>15:30</td>
                <td></td>
                <td class="tooltip">Afternoon Tea Break
                    <span class="tooltiptext">Don't forget to hydrate!</span>
                </td>
                <td>15 mins</td>
            </tr>
            <tr>
                <td>15:45</td>
                <td>Andrew Rooke</td>
                <td class="tooltip">Alternative Cyber Careers - Solution and Enterprise Security Architecture
                    <span class="tooltiptext">Solutions and Enterprise Architecture make up two critical areas for effective cyber security control and management within an Organisation. During this presentation, Andrew will provide the audience with perspective on architecture based cyber security career pathways, their value, and why they may be of interest.</span>
                </td>
                <td>45 mins</td>
            </tr>
            <tr>
                <td>16:30</td>
                <td>Nicole Murdoch</td>
                <td class="tooltip">Where Inventors Need to Start
                    <span class="tooltiptext">We aim to answer the first question asked by every entrepreneur with an idea, business, invention, product, expansion plan, or start-up - where to start.</span>
                </td>
                <td>60 mins</td>
            </tr>
        </tbody>
    </table>
</div>

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