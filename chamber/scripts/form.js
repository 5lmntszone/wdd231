const timeStamp = document.getElementById("timestamp");
const membershipDetails = document.getElementById("membership-details");

if (timeStamp) {
    timeStamp.value = new Date().toISOString();
}

const memberships = [
    {
        id: "NP",
        title: "NP Membership",
        description: "No cost for nonprofit organizations",
        benefits: [
            "Free for nonprofit organizations",
            "Access to community events",
            "Training sessions and workshops"
        ]
    },
    {
        id: "Bronze",
        title: "Bronze Membership",
        description: "Basic benefits included",
        benefits: [
            "Newsletter ads",
            "Member-only event invites",
            "10% event discount"
        ]
    },
    {
        id: "Silver",
        title: "Silver Membership",
        description: "Extra visibility + discounts",
        benefits: [
            "Featured directory listing",
            "Sidebar ad placement",
            "15% event discount"
        ]
    },
    {
        id: "Gold",
        title: "Gold Membership",
        description: "All features + homepage spotlight",
        benefits: [
            "Homepage spotlight",
            "Premium advertising",
            "25% discount",
            "VIP access to networking events"
        ]
    },
];

function createMembershipCards() {
    const container = document.getElementById("membership-cards");

    memberships.forEach(level => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${level.title}</h4>
            <p>${level.description}</p>
            <button type="button" onclick="displayMembershipDetails('${level.id}')">More Info</button>
        `;
        container.appendChild(card);
    });
}

function displayMembershipDetails(membershipId) {
    const level = memberships.find(m => m.id === membershipId);
    const modal = document.getElementById("membership-details");
    const content = modal.querySelector(".dialog-content");

    const benefitsHTML = level.benefits.map(benefit => `<li>${benefit}</li>`).join("");

    content.innerHTML = `
        <h3>${level.title} Benefits</h3>
        <ul>${benefitsHTML}</ul>
        <button id="closeModal">Close</button>
    `;

    modal.showModal();

    document.getElementById("closeModal").addEventListener("click", () => modal.close());

    modal.addEventListener("click", event => {
        const rect = modal.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        ) {
          modal.close();
        }
      });
}

createMembershipCards();
