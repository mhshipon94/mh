let homeScore = 0;
let guestScore = 0;

const homeDisplay = document.getElementById("home-score");
const guestDisplay = document.getElementById("guest-score");

function addHome(points) {
  homeScore += points;
  homeDisplay.textContent = homeScore;
}

function addGuest(points) {
  guestScore += points;
  guestDisplay.textContent = guestScore;
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  homeDisplay.textContent = 0;
  guestDisplay.textContent=0;
}