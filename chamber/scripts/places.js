import {places} from '../data/places.mjs'

const container = document.getElementById('allplaces');

places.forEach(place => {
    const card = document.createElement('div');

    card.innerHTML = `
    <h2>${place.name}</h2>
    <img src="${place.img}" alt="${place.name}" width="300" height="200" loading="lazy">
    <p>${place.description}</p>
    <address>${place.address}</address>
    <button class="learn-more">Learn More</button>
  `;

  container.appendChild(card);
});