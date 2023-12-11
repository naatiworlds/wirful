import { Routes, Route } from "react-router-dom"
import Inicio from "./Inicio"
import SobreNosotros from "./SobreNosotros"
import ColeecionNatiworlds from "./ColeecionNatiworlds";
import './App.css';
import React from 'react';
import ColeecionGamer from "./ColeccionGamer";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="sobre-nosotros" element={<SobreNosotros />} />
      <Route path="coleccion-natiworlds" element={<ColeecionNatiworlds />} />
      <Route path="coleccion-gamer" element={<ColeecionGamer />} />
      {/* <Route path="contacto" element={<Contacto />} /> */}
    </Routes>
  );
}

export default App;
