import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';

import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';


function CarouselExample() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img6}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;