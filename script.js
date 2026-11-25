const API_KEY = '8b6a5bdd248368a1cc2fcf977dc2b812';
const CITY = 'London';

const button = document.getElementById('getWeather');
const weatherDiv = document.getElementById('weather');

button.addEventListener('click', () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

  weatherDiv.textContent = 'Завантаження...';

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      weatherDiv.innerHTML = `
        <p><b>Місто:</b> ${data.name}</p>
        <p><b>Температура:</b> ${temperature} °C</p>
        <p><b>Вологість:</b> ${humidity} %</p>
        <p><b>Швидкість вітру:</b> ${windSpeed} м/с</p>
      `;
    })
    .catch(error => {
      weatherDiv.textContent = 'Не вдалося отримати дані: ' + error.message;
    });
});
