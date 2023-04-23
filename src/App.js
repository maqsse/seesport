import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './page/Accueil.js'
import './App.css'

function App() {

  
  return (
    
    <div className='main'>
      
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Accueil />}/>
          <Route path="/user/12" element={<Accueil />} />
            <Route path='/user/:id' element={<Accueil />} />
          <Route path='*' element={<Navigate to='/user/12' />} />
            <Route path='/user/:id/activity' element={Navigate to='/user/:id/activity' />}
                <Route path='/user/:id/average-sessions' element={Navigate to='/user/:id/average-sessions' />}  
              <Route path='/user/:id/performance' element={Navigate to='/user/:id/performance' />}

          <Route path="/accueil" element={<Accueil />} />
        </Routes>
        
      </BrowserRouter>
     
    </div>
     
  )
}

export default App;
