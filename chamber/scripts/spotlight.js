async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const eligibleMembers = data.members.filter(m => m.membership === 2 || m.membership === 3);

    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

    const numToShow = Math.floor(Math.random() * 2) + 2; 
    const selected = shuffled.slice(0, numToShow);

    const spotlightContainer = document.querySelector(".spotlight-container");
    spotlightContainer.innerHTML = ""; 

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.description || "Discover more about this business on their website."}</p>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p class="membership-level">Membership: ${getMembershipLabel(member.membership)}</p>
      `;

      spotlightContainer.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading spotlight members:", err);
  }
}

function getMembershipLabel(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Unknown";
  }
}

loadSpotlights();
