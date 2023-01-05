const apiKey = "3fceb9c975b8fd5958f8666dabf2df0c";
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");
const displayArea = document.querySelector("#display-area");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;

  // Make a request to the OpenWeatherMap API with the search term
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      // Extract the relevant data from the API response
      const { name, main, weather,wind } = data;
      const { temp, humidity } = main;
      const [description] = weather;
console.log(description,wind)
      // Create the HTML for the weather display
      const html = `
        <h2>Weather for ${name}</h2>
        <p>Temperature: ${Math.round( 1.8*(temp-273) + 32)}°F</p>
        <p>Humidity: ${humidity}%</p>
        <p>Conditions: ${description.main}</p> <img src="http://openweathermap.org/img/wn/${description.icon}@2x.png"> 
        <p>Wind Speed: ${wind.speed} </p>
        <p>Wind Gust: ${wind.gust}</p>
        <p>Wind Deg: ${wind.deg} </p>

      `;

      // Display the weather data in the display area
      displayArea.innerHTML = html;
    });
});
