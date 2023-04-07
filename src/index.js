import React from 'react';
import ReactDOMclient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';




const root = ReactDOMclient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
        
  </React.StrictMode>
);

reportWebVitals();
