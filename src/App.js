import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inicio from "./pages/Inicio"
import SobreNosotros from "./pages/SobreNosotros"
import ColeecionNatiworlds from "./pages/ColeecionNatiworlds";
import './App.css';
import ColeecionGamer from "./pages/ColeccionGamer";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/coleccion-natiworlds" element={<ColeecionNatiworlds />} />
        <Route path="/coleccion-gamer" element={<ColeecionGamer />} />
      </Routes>
  );
}

export default App;
