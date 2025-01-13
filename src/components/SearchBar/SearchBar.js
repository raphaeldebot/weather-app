// Import React for building UI components and useState for managing localisation state
import React, { useState } from 'react';

// Import styles for the search bar
import './SearchBar.css';

/* SearchBar Logic */
function SearchBar({ onSearch }) {
    // Local state to store the city input
    const [city, setCity] = useState('');

    // Function to handle the search button click
    const handleSearch = () => {
        if (city.trim() !== '') { // Check if the input is not empty
            onSearch(city); // Trigger the onSearch function from App.js
            setCity(''); // Clear the input field after search
        }
    };

    return (
        <div className="search-bar"> {/* Container for the search bar */}
            <input
                type="text" // Text input for the city name
                value={city} // Bind the input value to the local state
                onChange={(e) => setCity(e.target.value)} // Update the state on input change
                placeholder="Enter a city" // Placeholder text
                className="search-input" // Class for styling the input
            />
            <button 
                onClick={handleSearch} // Trigger search on button click
                className="search-button" // Class for styling the button
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar; // Export the SearchBar component for use in App.js

