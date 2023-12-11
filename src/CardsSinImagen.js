import "./Card.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardsSinImagen(promp) {
    return (
        <Card class="card">
            <Card.Title><h2 class="tituloCard">{promp.titulo}</h2></Card.Title>
            <Card.Body>
                    <Card.Img variant="top" src={promp.imagen} />
                <Card.Text>
                    {promp.figure}
                </Card.Text>
                <Button variant="primary"><a href="#">{promp.precio}</a></Button>
            </Card.Body>
        </Card>
    )
}
export default CardsSinImagen;