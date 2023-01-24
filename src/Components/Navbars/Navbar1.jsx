import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import './css/homenav.css'
import logo from './images/log.jpg'

function NavScrollExample() {
  return (
    <Navbar variant="dark" className='nav2'>
      <Container fluid style={{margin:'0 6vw 0 24vw'}}>
       <Nav.Link href="/home">
            <img
              src={logo}
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="Minicart logo"
            />
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Nav>
            <InputGroup className="search">
                <Form.Control placeholder="Search for products"/>
                <Nav.Link className="btn search1" href="#home">🔍</Nav.Link>
            </InputGroup>
            <Nav.Link className="btn login" href="/login" style={{}}>Login</Nav.Link>
        </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;