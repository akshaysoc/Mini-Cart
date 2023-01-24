import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './css/usernav.css'
import logo from './images/log.jpg'

function Usernavbar() {
  const usenavigate=useNavigate();
  const [user, setUser] = useState([]);

  useEffect(()=>{
    let username = sessionStorage.getItem('username');
    if(username ===''|| username===null){
        usenavigate('/home');
    }
    else{
      sessionStorage.setItem("username", username);
          setUser(username)
    }
},[]);
  return (
    <Navbar variant="dark" className='nav2  '>
      <Container fluid style={{margin:'0 6vw 0 25vw'}}>
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
            <InputGroup  className="usersearch" style={{marginLeft:'2vw'}}>
                <Form.Control placeholder="Search for products"/>
                <Nav.Link className="btn search1" href="#home">🔍</Nav.Link>
            </InputGroup>
            <DropdownButton title={'My Profile'} className='logoutbtn' style={{border:'none'}} variant='rgb(252, 252, 29)'>
              <Dropdown.Item href="#placement">👤{user}</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="#placement">Orders</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="#placement">Wishlist</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="/cart">My Cart</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="/login">Log Out</Dropdown.Item>
            </DropdownButton>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Usernavbar;