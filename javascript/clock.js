function update12HourClock() {
let currentTime = new Date();
let currentHours = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();
let currentSeconds = currentTime.getSeconds();
currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
let timeOfDay = (currentHours < 12) ? "AM" : "PM";
currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
currentHours = (currentHours == 0) ? "12" : currentHours;
let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
document.getElementById("12Hourclock").innerHTML = currentTimeString;
};

function update24HourClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
  document.getElementById("24HourClock").innerHTML = currentTimeString;
};

function addLoadEvent(func) {
  let oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
};

window.setInterval('update12HourClock()', 1000);
window.setInterval('update24HourClock()', 1000);

addLoadEvent(update12HourClock);
addLoadEvent(update24HourClock);
