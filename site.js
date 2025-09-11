window.addEventListener("DOMContentLoaded", () => {
  const hours = new Date().getHours(); // get the current hour

  const isMorning = hours >= 4 && hours < 12;   // is it morning?
  const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
  const isEvening = hours >= 17 || hours < 4;   // is it evening?

  let message = "";

  if (isMorning) {
    message = "Good morning! Welcome to my page!";
  } else if (isAfternoon) {
    message = "Good afternoon! Hope you're having a great day!";
  } else if (isEvening) {
    message = "Good evening! Thanks for stopping by!";
  }

  const welcomeDiv = document.getElementById("welcome");
  welcomeDiv.textContent = message;
});
