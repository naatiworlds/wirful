import React from "react"
import CardsConImagen from "./CardsConImagen";
import CardsSinImagen from "./CardsSinImagen";
import "./Inicio.css"
import Cabecera from "./Cabecera";
import wirful1 from "./images/Natiworlds/coleccion.jpeg"
import wirful2 from "./images/gamer/coleccion.jpeg"
import wirful3 from "./images/personalizado/personalizado.jpeg"
import proximamente from "./images/proximamente.png"
function Inicio() {
    return (
        <>
            <marquee id="advertencia">
                <h2>Maqueta inicial, página en proceso...</h2>
            </marquee>
            <Cabecera />

            <h2 class="tituloSeccion">Colecciones</h2>
            <section class="container">
                <CardsConImagen
                    redireccion="coleccion-youtubers"
                    imagen={wirful1}
                    alt={"Imagen de la colección"}
                    titulo={"Colleción Youtubers"}
                    alt2={"Segunda imagen de la colección"}
                    figure={"Colección youtubers ( para colaboraiones contactar )"}
                    precio={"Próximamente"}
                />
                <CardsConImagen
                    redireccion="coleccion-gamer"
                    imagen={wirful2}
                    alt={"Imagen de la colección"}
                    titulo={"Colección gamer"}
                    alt2={"Segunda imagen de la colección"}
                    figure={"Colección gamer para los fans de los videojuegos"}
                    precio={"Próximamente"}
                />
                <CardsConImagen
                    redireccion="Personalizados"
                    imagen={wirful3}
                    alt={"Imagen de las camisetas personalizadas"}
                    titulo={"Personalizados"}
                    alt2={"Segunda imagen de la colección"}
                    figure={"Produtos personalizables con el nombre que elijas"}
                    precio={"Próximamente"}
                />
                

                <CardsSinImagen
                    imagen={proximamente}
                    alt={"Imagen de la colección"}
                    titulo={"Próximamente"}
                    figure={"Próximas colecciones"}
                    precio={"Próximamente"}
                />

            </section>
            
        </>

    )
}
export default Inicio;