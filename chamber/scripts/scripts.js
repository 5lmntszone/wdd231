// Date and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("open");
});

// Grid/List Toggle
const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");
const display = document.querySelector("#business-directory");

gridButton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listButton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

// Fetch and Display Members
async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading member data:", error);
  }
}

function displayMembers(members) {
  display.innerHTML = ""; 

  members.forEach(member => {
    const section = document.createElement("section");

    section.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership-level">Membership: ${getMembershipLabel(member.membership)}</p>
    `;

    display.appendChild(section);
  });
}

function getMembershipLabel(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Unknown";
  }
}

getMembers();

// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});
