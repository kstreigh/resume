import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Salads from './pages/projects/salads';
import Pizza from './pages/projects/Pizza';
import Pawliday from './pages/projects/pawliday';
const App = () => {
  return (
    <BrowserRouter>
      <div className ="container">
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/pizza" element={<Pizza/>}/>
          <Route path="/pawliday" element={<Pawliday/>}/>
          <Route path="/salads" element={<Salads/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
