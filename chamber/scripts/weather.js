const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "7114b4b1d793707e56517c876d66a34c"
const myLat = "16.76" 
const myLong = "-3.00"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Forecast fetch error:", error);
  }
}

function displayForecast(data) {
  const container = document.querySelector("#forecast-cards");
  container.innerHTML = "";

  const daily = data.list.filter(entry => entry.dt_txt.includes("12:00:00")).slice(0, 3);

  daily.forEach(day => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    const desc = day.weather[0].description;
    const temp = Math.round(day.main.temp);

    const card = document.createElement("div");
    card.classList.add("forecast-card");
    card.innerHTML = `
      <h4>${dayName}</h4>
      <img src="${icon}" alt="${desc}" loading="lazy">
      <p>${temp}&deg;C</p>
      <p>${desc}</p>
    `;
    container.appendChild(card);
  });
}

fetchForecast();

function displayResults(data) {
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('src', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
}