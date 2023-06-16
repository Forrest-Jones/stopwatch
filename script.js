var timeElement = document.getElementById('time');
var interval;
var startTime;
var elapsedTime = 0;

function start() {
  if (!interval) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 10); // update every 10 milliseconds
  }
}

function stop() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  updateDisplay(0);
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  updateDisplay(elapsedTime);
}

function updateDisplay(time) {
  var milliseconds = Math.floor(time % 1000 / 10);
  var seconds = Math.floor(time / 1000) % 60;
  var minutes = Math.floor(time / 1000 / 60) % 60;
  var hours = Math.floor(time / 1000 / 3600);

  var formattedTime =
    pad(hours) + ':' +
    pad(minutes) + ':' +
    pad(seconds) + '.' +
    pad(milliseconds);

  timeElement.textContent = formattedTime;
}

function pad(number) {
  return number.toString().padStart(2, '0');
}
