import "./ColeccionNatiworlds.css"
import Cabecera from "./Cabecera";
import Ejemplo from "./Slider";
import wirful1 from './images/Natiworlds/wirful1.jpg';
import wirful2 from './images/Natiworlds/wirful2.png';
import wirful3 from './images/Natiworlds/wirful3.png';
import "./Card.css"

const slidesData = [
    {
        image: wirful1,
        title: 'Branch de Natiworlds',
        subtitle: 'Una colección inspirada en mi canal de YouTube Natiworlds',
        precio: "20.00€"
    },
    {
        image: wirful2,
        title: 'Branch de Natiworlds',
        subtitle: 'Una colección inspirada en mi canal de YouTube Natiworlds',
        precio: "20.00€"
    },
    {
        image: wirful3,
        title: 'Branch de Natiworlds',
        subtitle: 'Una colección inspirada en mi canal de YouTube Natiworlds',
        precio: "20.00€"
    }
];

function ColeecionNatiworlds() {
    return (
        <>
            <Cabecera 
                enlaceExtra={"/"}
                tituloExtra={"Inicio"}
            />
            <h2 class="tituloSeccion">Coleeción natiworlds</h2>
            <div class="slider-container">

                <Ejemplo slides={slidesData} />
            </div>
            <br></br>

        </>
    )
}
export default ColeecionNatiworlds;