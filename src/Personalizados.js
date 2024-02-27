import "./ColeccionYoutubers.css"
import Cabecera from "./Cabecera";
import Ejemplo from "./Slider";
import wirful1 from './images/personalizado/back0000.png';
import wirful2 from './images/Natiworlds/wirful1.png';
import wirful3 from './images/Natiworlds/wirful3.png';

import "./Card.css"

const slidesData = [
    {
        image: wirful1,
        title: 'Disponible pronto...',
        subtitle: 'Camisetas personalizadas con nombre y diseño al gusto del consumidor',
        precio: "19.99€",
    },
    {
        image: wirful2,
        title: 'Disponible pronto...',
        subtitle: 'Camisetas personalizadas con nombre y diseño al gusto del consumidor',
        precio: "19.99€",
        
    },
    {
        image: wirful3,
        title: 'Disponible pronto...',
        subtitle: 'Camisetas personalizadas con nombre y diseño al gusto del consumidor',
        precio: "19.99€",

    }
];

function ColeecionYoutubers() {
    return (
        <>
            <Cabecera 
                enlaceExtra={"/"}
                tituloExtra={"Inicio"}
            />
            <h2 class="tituloSeccion">Personalizados</h2>
            <div class="slider-container">

                <Ejemplo slides={slidesData} />
            </div>
            <br></br>

        </>
    )
}
export default ColeecionYoutubers;