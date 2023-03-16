import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './page/Accueil.js'


function App() {
  return (
    <div>
      
      <BrowserRouter>
  <Routes>
<Route path="/" element={<Accueil />} />
<Route path="/accueil" element={<Accueil />} />
</Routes>
</BrowserRouter>

    </div>
    
  );
}

export default App;
