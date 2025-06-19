import { showLoader, hideLoader } from './loader.js';
import { updateFooter } from './footerUtils.js';

showLoader();

const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

const name = myInfo.get('name');
const email = myInfo.get('email');
const interest = myInfo.get('interest');

document.querySelector('#results').innerHTML = `
    <h2>Welcome, ${name}!</h2>
    <p>Thanks for joining the Gear&Ride community.</p>
    <p>We’ll keep you updated on <strong>${interest}</strong> at <strong>${email}</strong>.</p>
  `;

hideLoader();
updateFooter();

