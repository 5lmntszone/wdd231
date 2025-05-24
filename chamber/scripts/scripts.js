document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const businesses = [
    {
      name: "Business One",
      tagline: "Business Tag Line",
      img: "images/business1.jpg", 
      email: "info1@example.com",
      phone: "800-555-1111",
      url: "https://business1.com"
    },
    {
      name: "Business Two",
      tagline: "Business Tag Line",
      img: "images/business2.jpg",
      email: "info2@example.com",
      phone: "800-555-2222",
      url: "https://business2.com"
    },
    {
      name: "Business Three",
      tagline: "Business Tag Line",
      img: "images/business3.jpg",
      email: "info3@example.com",
      phone: "800-555-3333",
      url: "https://business3.com"
    }
  ];
  
  const container = document.getElementById('business-container');
  
  businesses.forEach(biz => {
    const card = document.createElement('div');
    card.classList.add('business-card');
  
    card.innerHTML = `
      <img src="${biz.img}" alt="${biz.name}" loading="lazy">
      <h3>${biz.name}</h3>
      <p><em>${biz.tagline}</em></p>
      <p><strong>Email:</strong> <a href="mailto:${biz.email}">${biz.email}</a></p>
      <p><strong>Phone:</strong> ${biz.phone}</p>
      <p><strong>URL:</strong> <a href="${biz.url}" target="_blank">${biz.url}</a></p>
    `;
  
    container.appendChild(card);
  });
  
const toggle = document.getElementById('darkToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
