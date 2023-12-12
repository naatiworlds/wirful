import "./ColeccionYoutubers.css"
import Cabecera from "./Cabecera";
import Ejemplo from "./Slider";
import gamer1 from './images/gamer/coleccion.jpeg';
import gamer2 from './images/gamer/coleccion.jpeg';
import gamer3 from './images/gamer/coleccion.jpeg';
import "./Card.css"

const slidesData = [
    {
        image: gamer1,
        title: 'Disponible pronto...',
        subtitle: 'Una colección para todos esos gamers con pasión para los videojuegos',
        precio: "??.??€",
    },
    {
        image: gamer2,
        title: 'Disponible pronto...',
        subtitle: 'Una colección para todos esos gamers con pasión para los videojuegos',
        precio: "??.??€",
    },
    {
        image: gamer3,
        title: 'Disponible pronto...',
        subtitle: 'Una colección para todos esos gamers con pasión para los videojuegos',
        precio: "??.??€",
    }
];

function ColeecionGamer() {
    return (
        <>
            <Cabecera
                enlaceExtra={"/"}
                tituloExtra={"Inicio"}
            />
            <h2 class="tituloSeccion">Coleeción gamer</h2>
            <div class="slider-container">

                <Ejemplo slides={slidesData} />

            </div>
            <br></br>

        </>
    )
}
export default ColeecionGamer;