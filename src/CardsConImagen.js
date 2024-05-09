import "./Card.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardsConImagen(promp) {
    return (
        <article class="card-container">
            <Card class="card">
            <Card.Title><h2 class="tituloCard"><a href={promp.redireccion}>{promp.titulo}</a></h2></Card.Title>
            <Card.Body>
                <div class="imagenes">
                <a href={promp.redireccion}><Card.Img variant="top" src={promp.imagen} /></a>
                </div>
                <Card.Text>
                    {promp.figure}
                </Card.Text>
                <Button variant="primary"><a href="#">{promp.precio}</a></Button>
            </Card.Body>
        </Card>
        </article>
        
    )
}
export default CardsConImagen;