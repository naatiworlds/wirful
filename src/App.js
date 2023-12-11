import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inicio from "./pages/Inicio"
import SobreNosotros from "./pages/SobreNosotros"
import ColeecionNatiworlds from "./pages/ColeecionNatiworlds";
import './App.css';
import React from 'react';
import ColeccionGamer from "./pages/ColeccionGamer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route index element={ <Inicio /> } />
        <Route path="sobre-nosotros" element={<SobreNosotros />} />
        <Route path="coleccion-natiworlds" element={<ColeecionNatiworlds />} />
        <Route path="coleccion-gamer" element={<ColeccionGamer />} />
        {/* <Route path="contacto" element={<Contacto />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
