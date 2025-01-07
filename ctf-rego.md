---
layout: page
title: Capture The Flag Registration
permalink: /ctf-rego/
---


## AD Attack Lab Scenario
Welcome to the registration page for the AD attack lab scenario for BSides Brisbane 2024. Due to connectivity and infrastructure requirements, we require teams to pre-register, as to ensure we can provision access prior to the start of the event.

### [Download the info pack here](..\assets\2024\ctf\Bsides BNE CTF - ApexMotorSport Penetration Testing Brief.pdf){:target="_blank"}

## Registration Form
To register for our AD attack lab scenario, please complete the below form. Your details will be sent to our team who will be configuring access prior to the day. 

Please note that due to the complexity and cost of running the lab infrastructure, we can only accept team submissions and not individuals.

* Team Name: The team name you would like to use
* Captain: A discord profile for the team captain so we can message for verification and confirmation of additional details.
* Members: Discord profiles for the remaining team members.

<div class="form">
    <div class="input-container ic1">
    <input id="team" class="input" type="text" placeholder=" " />
    <div id="tm" class="cut cut-short"></div>
    <label for="team" class="placeholder">Team Name</label>
    </div>
    <div class="input-container ic2">
    <input id="captain" class="input" type="text" placeholder=" " />
    <div id="cpt" class="cut cut-short"></div>
    <label for="captain" class="placeholder">Captain</label>
    </div>
    <div class="input-container ic2">
    <input id="members" class="input" type="text" placeholder=" " />
    <div id="mbr" class="cut cut-short"></div>
    <label for="members" class="placeholder">Members</label>
    </div>
    <br />
    <button class="regobtn" style="vertical-align:middle" onclick="submit()"><span>Register </span></button>
</div>

<script type="text/javascript">
// decomissioned webhook
let poster = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA5NDgyMjU1NTYyNzU2NTE1OC8wdHN1NFhoZTBIZ0NFTXJDVUN5N19yZ0xTR1lMbWNyYW4xODNia2puN25SVUNCX3pMVUZNVlEzYXdobXRveUQtWUVEUA=="

function submit() {

let req = {
  embeds: [{
    title: "New Form Submission",
    description: "The following details can be used to register a new team for the AD attack lab.",
    timestamp: new Date().toISOString(),
    footer: {
      icon_url: "https://bsidesbrisbane.com/assets/favicon.png",
      text: "Submitted"
    },
    author: {
      name: "BSides Brisbane CTF",
      icon_url: "https://bsidesbrisbane.com/assets/favicon.png"
    },
    fields: [
      {
        name: "Team Name",
        value: document.getElementById("team").value
      },
      {
        name: "Captain",
        value: document.getElementById("captain").value
      },
      {
        name: "Members",
        value: document.getElementById("members").value
      }
    ]
  }]
}
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            alert("Thank you for registering");
            setTimeout(window.location="/ctf/", 5000); 
        }
    }
    xhr.open('post', atob(poster), true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(req)); 
}
</script>