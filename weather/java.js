async function getWeather() {
  const locationInput = document.getElementById('locationInput');
  const weatherInfo = document.getElementById('weatherInfo');

  const cityName = locationInput.value;

  if (!cityName) {
      alert('Please enter a city name');
      return;
  }

  const apiKey = 'c055eb8e6498d27ac79a5b87ed238fcc';  // Replace with your actual API key

  try {
      const response = await fetch(`https://openweathermap.org/?q=${cityName}&appid=${apiKey}`);
      
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Check if 'main' property is available before accessing 'temp'
      if (data.main && data.main.temp) {
          // Parse and display weather data as needed
          const temperature = data.main.temp;
          const description = data.weather[0].description;

          weatherInfo.innerHTML = `<p>Temperature: ${temperature} &#8451;</p><p>Description: ${description}</p>`;
      } else {
          throw new Error('Invalid data received from the API');
      }

  } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherInfo.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
  }
}
