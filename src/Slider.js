import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Slider.css"
import Button from 'react-bootstrap/Button';

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div>
            <img src={slide.image} alt={`Slide ${idx + 1}`} />
          </div>
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subtitle}</p>
            <Button class="button"><a href={slide.enlace}>{slide.precio}</a></Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

  );
}

export default Slider;
