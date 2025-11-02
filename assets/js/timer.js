var startDate = new Date();
var endDate = new Date("Sat Jul 04 2026 09:00:00 GMT+1000")

var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

var upgradeTime = 16569600;
var secondsss = upgradeTime;

function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = Math.floor(seconds % 60);
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  
  var countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    countdownElement.innerHTML = pad(days) + "d " + pad(hours) + "h " + pad(minutes) + "m " + pad(remainingSeconds) + "s";
    
    if (seconds == 0) {
      clearInterval(countdownTimer);
      countdownElement.innerHTML = "It's show time!";
    } else {
      seconds--;
    }
  } else {
    // If countdown element doesn't exist, just decrement seconds
    if (seconds > 0) {
      seconds--;
    } else {
      clearInterval(countdownTimer);
    }
  }
}
var countdownTimer = setInterval('timer()', 1000);