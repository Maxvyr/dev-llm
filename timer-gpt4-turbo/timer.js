document.addEventListener("DOMContentLoaded", () => {
  const endTime = new Date("2024-04-01T03:00:00").getTime(); // Set your countdown date here
  const timerElement = document.getElementById("timer");

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = endTime - now;

    // Time calculations for days, hours, minutes, and seconds
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    timerElement.innerText = `${hours}:${minutes}:${seconds}`;

    // If the countdown is over, write some text
    if (distance < 0) {
      clearInterval(interval);
      timerElement.innerText = "EXPIRED";
    }
  };

  // Update the countdown every 1 second
  const interval = setInterval(updateTimer, 1000);
});
