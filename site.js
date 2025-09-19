window.addEventListener("DOMContentLoaded", () => {
  const hours = new Date().getHours(); // get the current hour

  const isMorning = hours >= 4 && hours < 12;   // is it morning?
  const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
  const isEvening = hours >= 17 || hours < 4;   // is it evening?

  let message = "";

  if (isMorning) {
    message = "Good morning!";
  } else if (isAfternoon) {
    message = "Good afternoon!";
  } else if (isEvening) {
    message = "Good evening!";
  }

  const welcomeDiv = document.getElementById("welcome");
  welcomeDiv.textContent = message;

  localStorage.setItem("It's a secret to everybody.", "the cake is a lie, easy portal reference, give me the brownie points");
});
