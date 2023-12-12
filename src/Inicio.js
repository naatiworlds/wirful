import React from "react"
import CardsConImagen from "./CardsConImagen";
import CardsSinImagen from "./CardsSinImagen";
import "./Inicio.css"
import Cabecera from "./Cabecera";
import wirful1 from "./images/Natiworlds/coleccion.jpeg"
import wirful2 from "./images/gamer/coleccion.jpeg"
import proximamente from "./images/proximamente.png"
function Inicio() {
    return (
        <>
            <marquee id="advertencia">
                <h2>Maqueta inicial, página en proceso...</h2>
            </marquee>
            <Cabecera />

            <h2 class="tituloSeccion">Colecciones</h2>
            <div class="container">
                <CardsConImagen
                    redireccion="coleccion-natiworlds"
                    imagen={wirful1}
                    alt={"Imagen de la colección"}
                    titulo={"Colleción Natiworlds"}
                    alt2={"Segunda imagen de la colección"}
                    figure={"Colección be brave con una frase motivadora"}
                    precio={"??.??€"}
                />
                <CardsConImagen
                    redireccion="coleccion-gamer"
                    imagen={wirful2}
                    alt={"Imagen de la colección"}
                    titulo={"Colección gamer"}
                    alt2={"Segunda imagen de la colección"}
                    figure={"Colección be brave con una frase motivadora"}
                    precio={"??.??€"}
                />

                <CardsSinImagen
                    imagen={proximamente}
                    alt={"Imagen de la colección"}
                    titulo={"Próximamente"}
                    figure={"Colección be brave con una frase motivadora"}
                    precio={"??.??€"}
                />

            </div>
            
        </>

    )
}
export default Inicio;