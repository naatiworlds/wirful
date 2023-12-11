import "./Cabecera.css"
import logo from "./images/logo.png"
function Cabecera(props) {
    return (
        <div id="header">
            <img id="logo" src={logo} alt="Logo de la empresa"></img>
            <h1>Wirful.com</h1>
            <nav class="nav-superior">
                <li>
                    <a href={props.enlaceExtra}>{props.tituloExtra}</a>
                </li>
                <li>
                    <a href="mailto:natiworlds@gmail.com">Contacto</a>
                </li>
                <li>
                    <a href="/sobre-nosotros">Sobre nosotros</a>
                </li>
                <li>
                    <a href="https://linktr.ee/natiworlds" target="_blank">Mas info</a>
                </li>
                <li>
                    <a href="#">Registro</a>
                </li>
            </nav>

        </div>
    )
}
export default Cabecera;