import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root for the app and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
