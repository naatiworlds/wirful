import React from 'react';
import { Routes, Route, HashRouter as BrowserRouter } from "react-router-dom"
import Inicio from "./Inicio"
import SobreNosotros from "./SobreNosotros"
import ColeecionYoutubers from "./ColeecionYoutubers";
import './App.css';
import ColeecionGamer from "./ColeccionGamer";
import Personalizados from "./Personalizados";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="sobre-nosotros" element={<SobreNosotros />} />
      <Route path="coleccion-youtubers" element={<ColeecionYoutubers />} />
      <Route path="coleccion-gamer" element={<ColeecionGamer />} />
      <Route path="personalizados" element={<Personalizados />} />
    </Routes>
  );
}

export default App;
