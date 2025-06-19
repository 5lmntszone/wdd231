import { showLoader, hideLoader } from './loader.js';
import { updateFooter } from './footerUtils.js';
import './nav.js';

showLoader();

// Visit Banner
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

// Paralax Effect

const heroImg = document.querySelector('.hero img');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroImg) {
    heroImg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

// Fade-in animation for featured cards
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      obs.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.card').forEach(card => observer.observe(card));

hideLoader();
updateFooter();