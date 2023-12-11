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
  const [index1, setIndex1] = useState(0);

  const handleSelect1 = (selectedIndex1) => {
    setIndex(selectedIndex1);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <img src={slide.image} alt={`Slide ${idx + 1}`} />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            <Button class="button"><a href="#">{slide.precio}</a></Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

  );
}

export default Slider;
