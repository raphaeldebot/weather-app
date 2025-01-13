// Import React for building the component
import React from 'react';

// Import styles for the weather card
import './WeatherCard.css';

/* WeatherCard Component */
function WeatherCard({ weather }) {
    // Return nothing if weather data is not available
    if (!weather) return null;

    return (
        <div className="weather-card"> {/* Container for the weather information */}
            <p>{weather.name}, {weather.sys.country}</p> {/* Display city name and country code */}
            <p>{weather.main.temp}°C</p> {/* Display temperature */}
            <p>{weather.weather[0].description}</p> {/* Display weather description */}
        </div>
    );
}

export default WeatherCard; // Export the WeatherCard component for use in App.js

