import "./ColeccionNatiworlds.css"
import Cabecera from "../Cabecera";
import Ejemplo from "../Slider";
import gamer1 from '../images/gamer/coleccion.jpeg';
import gamer2 from '../images/gamer/coleccion.jpeg';
import gamer3 from '../images/gamer/coleccion.jpeg';
import "../Card.css"

const slidesData = [
    {
        image: gamer1,
        title: 'Branch de gamer',
        subtitle: 'Una colección para todos esos gamers con pasión para los videojuegos',
        precio: "20.00€"
    },
    {
        image: gamer2,
        title: 'Branch de Natiworlds',
        subtitle: 'Una colección para todos esos gamers con pasión para los videojuegos',
        precio: "20.00€"
    },
    {
        image: gamer3,
        title: 'Branch de Natiworlds',
        subtitle: 'Una colección para todos esos gamers con pasión para los videojuegos',
        precio: "20.00€"
    }
];

function ColeecionGamer() {
    return (
        <>
            <Cabecera 
                enlaceExtra={"/"}
                tituloExtra={"Inicio"}
            />
            <h2 class="tituloSeccion">Coleeción natiworlds</h2>
            <div class="slider-container">

                <Ejemplo slides={slidesData} />
                <Ejemplo slides={slidesData} />
                <Ejemplo slides={slidesData} />
                <Ejemplo slides={slidesData} />
                <Ejemplo slides={slidesData} />
                <Ejemplo slides={slidesData} />
            </div>
            <br></br>

        </>
    )
}
export default ColeecionGamer;