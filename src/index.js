import React from 'react';
import ReactDOM from 'react-dom/client'; // This is updated for React 18+
import './styles.css'; // Import your styles
import App from './App'; // Import the App component

// Create a root to render the App (React 18+ uses createRoot)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
