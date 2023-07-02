let launchTime = Date.now() + 176470000;
launchTime = new Date(launchTime).getTime();

let diffDay = document.querySelector("#day-container");
let diffHour = document.querySelector("#hour-container");
let diffMinute = document.querySelector("#minute-container");
let diffSecond = document.querySelector("#second-container");

function timer() {
  let currentTime = new Date().getTime();
  let difference = launchTime - currentTime;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  if (days == 1) {
    document.querySelector("#day-label").textContent = "DAY";
  } else document.querySelector("#day-label").textContent = "DAYS";
  if (hours == 1) {
    document.querySelector("#hour-label").textContent = "HOUR";
  } else document.querySelector("#hour-label").textContent = "HOURS";
  if (minutes == 1) {
    document.querySelector("#minute-label").textContent = "MINUTE";
  } else document.querySelector("#minute-label").textContent = "MINUTES";
  if (seconds == 1) {
    document.querySelector("#second-label").textContent = "SECOND";
  } else document.querySelector("#second-label").textContent = "SECONDS";

  if (days < 10) {
    diffDay.textContent = "0" + days;
  } else diffDay.textContent = days;
  if (hours < 10) {
    diffHour.textContent = "0" + hours;
  } else diffHour.textContent = hours;
  if (minutes < 10) {
    diffMinute.textContent = "0" + minutes;
  } else diffMinute.textContent = minutes;
  if (seconds < 10) {
    diffSecond.textContent = "0" + seconds;
  } else diffSecond.textContent = seconds;

  displayRefresh();
}

function displayRefresh() {
  const refreshTime = 900;
  setTimeout("timer()", refreshTime);
}
