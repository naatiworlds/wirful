import "./Cabecera.css"
import logo from "./images/logo.png"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
function Cabecera(props) {
    return (
        <div id="header">
            <img id="logo" src={logo} alt="Logo de la empresa"></img>
            <h1>Wirful.com</h1>
            {/* <Navbar bg='beige' variant='beige' width='100%' expand='lg' stkicy='top'>
                <Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav.Link href={props.enlaceExtra}><></>{props.tituloExtra}</Nav.Link>
                        <Nav.Link href='/Contacto'><></>Contacto</Nav.Link>
                        <NavDropdown title="Sobre nosotros" href='#' >

                            <NavDropdown.Item href='/sobre-nosotros'>Quienes somos</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>

                            <NavDropdown.Item href='/preguntas-frecuentes'><></>Preguntas frecuentes</NavDropdown.Item>
                            <NavDropdown.Item href='/nuestra-filosofía'><></>Nuestra filosofía</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/Fototeca'><></>Mas info</Nav.Link>
                        <Nav.Link href='/Fototeca'><></>Registro</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
            </Navbar> */}
            <Navbar bg='beige' variant='beige' width='90%' expand='lg' stkicy='top'>
                <Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav.Link href='/'><></>Inicio</Nav.Link>
                        <Nav.Link href='/Contacto'><></>Contacto</Nav.Link>
                        <NavDropdown title="Nuestra carta" href='/nuestraCarta' >

                            <NavDropdown.Item href='/NuestraCarta'>Nuestra carta</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>

                            <NavDropdown.Item href='/MenuPorPrecio'><></>Menú por precios</NavDropdown.Item>
                            <NavDropdown.Item href='/MenuInfantil'><></>Menú infantil</NavDropdown.Item>
                            <NavDropdown.Item href='/MenuALaCarta'><></>Menú a la carta</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/QuienesSomos'><></>Quiénes somos</Nav.Link>
                        <Nav.Link href='/Fototeca'><></>Fototeca</Nav.Link>
                    </Navbar.Collapse>

                </Nav>
            </Navbar>

        </div>
    )
}
export default Cabecera;