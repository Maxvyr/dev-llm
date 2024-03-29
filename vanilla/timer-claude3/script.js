let countdown;
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function startTimer(duration) {
  let timer = duration;
  let minutes, seconds;

  countdown = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

startBtn.addEventListener("click", function () {
  const minutes = prompt("Enter the number of minutes for the countdown:");
  const duration = minutes * 60;
  startTimer(duration);
});

stopBtn.addEventListener("click", stopTimer);
