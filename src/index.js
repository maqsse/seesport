import React from 'react';
import ReactDOMclient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





const root = ReactDOMclient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
        
  </React.StrictMode>
);

reportWebVitals();
