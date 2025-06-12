const getString = window.location.search;

const userInfo = new URLSearchParams(getString);

document.querySelector('#results').innerHTML = `
    <p>We're excited to welcome you, <strong>${userInfo.get('first')} ${userInfo.get('last')}</strong>.</p>
    <p>Your organizational title: <strong>${userInfo.get('orgTitle')}</strong></p>
    <p>Your phone number: <strong>${userInfo.get('phone')}</strong></p>
    <p>Business Name: <strong>${userInfo.get('businessName')}</strong></p>
    <p>We’ve sent a confirmation to <strong>${userInfo.get('email')}</strong>.</p>
    <p>Form submitted on: <strong>${new Date(userInfo.get('timestamp')).toLocaleString()}</strong></p>
    <p>We’ll be in touch soon with membership benefits and upcoming events.</p>
    <a href="index.html" class="return-home-button">Return to Home</a>
`;