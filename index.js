var second = 0;
var hour = 0;
var miliSecond = 0;
var showHour = document.getElementById("hour");
var showSecond = document.getElementById("second");
var showMilisecond = document.getElementById("mili-second");
var startBtn = document.getElementById("start");
var stoptBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var clock = document.getElementById("clock");
var interval;

function startTimer() {
  miliSecond++;
  if (miliSecond < 9) {
    showMilisecond.innerHTML = "0" + miliSecond;
  }
  if (miliSecond > 9) {
    showMilisecond.innerHTML = miliSecond;
  }
  if (miliSecond > 99) {
    second++;
    showSecond.innerHTML = "0" + second;
    miliSecond = 0;
    showMilisecond.innerHTML = "0" + miliSecond;
  }
  if (second > 9) {
    showSecond.innerHTML = second;
  }
  if (second > 60) {
    hour++;
    showHour.innerHTML = "0" + hour;
    second = 0;
    showSecond.innerHTML = "0" + second;
    miliSecond = 0;
    showMilisecond.innerHTML = "0" + miliSecond;
  }
}

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  clock.style.animation = "half-rotate 1.5s infinite linear";
  interval = setInterval(startTimer, 10);
  startBtn.disabled = true;
  stoptBtn.disabled = false;
});
stoptBtn.addEventListener("click", () => {
  clearInterval(interval);
  clock.style.animation = "";
  startBtn.disabled = false;
  stoptBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  clock.style.animation = "";
  second = 0;
  miliSecond = 0;
  showMilisecond.innerHTML = "0" + miliSecond;
  showSecond.innerHTML = "0" + second;
  clock.style.animation = "full-rotate 1s linear";
  startBtn.disabled = false;
  stoptBtn.disabled = false;
});
