import Carousel from 'react-bootstrap/Carousel';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';


function CaroExample() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img7}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img10}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img11}
          alt="Third slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={img6}
          alt="Second slide"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CaroExample;