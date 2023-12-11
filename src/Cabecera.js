import "./Cabecera.css"
import logo from "./images/logo.png"
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
function Cabecera(props) {
    return (
        <div id="header">
            <img id="logo" src={logo} alt="Logo de la empresa"></img>
            <h1>Wirful.com</h1>
            <nav class="nav-superior">
            <Navbar bg='beige' variant='beige' width='100%' expand='lg' stkicy='top'>
                <Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
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
            </Navbar>
            </nav>

        </div>
    )
}
export default Cabecera;