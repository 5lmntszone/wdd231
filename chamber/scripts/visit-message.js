const messageElement = document.getElementById('visitMessage');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  // First visit
  messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const timeDifference = now - parseInt(lastVisit, 10);
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor(timeDifference / millisecondsInADay);

  if (daysBetween < 1) {
    messageElement.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    messageElement.textContent = "You last visited 1 day ago.";
  } else {
    messageElement.textContent = `You last visited ${daysBetween} days ago.`;
  }
}

localStorage.setItem('lastVisit', now);
