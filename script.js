let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time) {
  const ms = Math.floor((time % 1000) / 10);
  const sec = Math.floor((time / 1000) % 60);
  const min = Math.floor((time / 60000) % 60);

  return (
    String(min).padStart(2, "0") + ":" +
    String(sec).padStart(2, "0") + ":" +
    String(ms).padStart(2, "0")
  );
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.textContent = display.textContent;
  laps.appendChild(li);
}
