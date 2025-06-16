// Visit Banner Logic
const banner = document.querySelector(".visit-banner");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  banner.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const difference = now - parseInt(lastVisit, 10);
  const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (daysPassed < 1) {
    banner.textContent = "Back so soon! Awesome!";
  } else if (daysPassed === 1) {
    banner.textContent = "You last visited 1 day ago.";
  } else {
    banner.textContent = `You last visited ${daysPassed} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);

// Footer dynamic year & last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
