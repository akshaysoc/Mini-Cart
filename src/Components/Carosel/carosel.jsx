import Carousel from 'react-bootstrap/Carousel';
import caro1 from './images/caro9.jpg';
import caro2 from './images/caro10.jpg';
import caro3 from './images/caro11.jpg';
import caro4 from './images/caro6.jpg';
import caro5 from './images/caro12.jpg';
import caro6 from './images/caro13.jpg';

function IndividualIntervalsExample() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={caro1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={caro2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={caro5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={caro4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={caro3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          width='100%'
          height='400px'
          src={caro6}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;