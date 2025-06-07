async function loadGoldSpotlights() {
    try {
      const response = await fetch("data/members.json");
      const data = await response.json();
  
      const goldMembers = data.members.filter(m => m.membership === 3);
      const spotlightContainer = document.querySelector(".spotlight-container");
  
      goldMembers.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}" loading="lazy">
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
  
        spotlightContainer.appendChild(card);
      });
    } catch (err) {
      console.error("Error loading spotlight members:", err);
    }
  }
  
  loadGoldSpotlights();
  