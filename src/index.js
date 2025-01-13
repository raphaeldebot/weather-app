// React and ReactDOM imports for building and rendering the app
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the main app component and the global CSS
import App from './App';
import './index.css';

// Create the React root element linked to the "root" div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the main App component inside the root
root.render(<App />);
