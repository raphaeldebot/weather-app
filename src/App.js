// Import React for building UI components and useState for managing component state
import React, { useState } from 'react';
// Import styles for the app box
import './App.css';
// Import the SearchBar and WeatherCard components
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
// Fetch API key from environment variable
const apiKey = process.env.REACT_APP_API_KEY; // Fetch API key from environment variable

// Main component for the Weather App
function App() {
  // State to store the weather data fetched from the API
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data from OpenWeather API
  function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    // The fetch
    fetch(apiUrl)
      .then(response => response.json()) // Convert the API response to JSON
      .then(data => {
        console.log(data); // Log the received data for debugging
        if (data.cod === 200) { // If the request was successful
          setWeather(data); // Update the weather state with the received data
        } else {
          alert('City not found bro !'); // Alert the user if the city was not found
        }
      })
      .catch(error => console.error('Error fetching weather data:', error)); // Log any errors in the console
  }


  return (
    <div className="app-container"> {/* Main container for the app */}
      <div className="weather-box"> {/* Box containing the app's content */}
        <h1>Weather App</h1> {/* My app title :D */}
        <SearchBar onSearch={fetchWeather} /> {/* Render the search bar and pass the fetchWeather function as a prop */}
        {weather && <WeatherCard weather={weather} />} {/* Render the weather card if data exists */}
      </div>
    </div>
  );
}

export default App; // Export the App component for use in index.js
