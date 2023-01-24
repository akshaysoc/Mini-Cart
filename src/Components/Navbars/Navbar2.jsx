import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import './css/menu.css'


function Menu(){

    return(
        <Navbar  variant='dark' className='menu'>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: '100px',marginLeft: '13vw' }}
              navbarScroll
            >
            <Nav.Link id='gq' className='nav1' href="#home">HOME</Nav.Link>
              
              <NavDropdown className='nav1' title="ELECTRONICS" id='gq'>
                <NavDropdown.Item href="#dept">Mobiles</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#dept">Mobile Accessories</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#dept">Laptops</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#dept">Desktop PCs</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#dept">Gaming & Accessories</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#dept">Camera</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className='nav1' title="MEN" id="gq">
                <NavDropdown.Item href="#">Formals</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#">Casuals</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#">Jackets</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#">Watches</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Footwares</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className='nav1' title="WEMEN" id="gq">
                <NavDropdown.Item href="#">Western & Maternity Wear</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#">Ethnic Wear</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#">Jewellery</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#">Watches</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Footwares</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className='nav1' title="APPLIENCES" id="gq">
                <NavDropdown.Item href="#placement">Telivison</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#placement">Speakers</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#placement">Air Conditioners</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#placement">Refrigerators</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#placement">Washing Machine</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#placement">Kitchen Appliances</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link id='gq' className='nav1' href="#contact">TOP OFFERS</Nav.Link>
              <Nav.Link id='gq' className='nav1' href="#contact">CONTACT</Nav.Link>
              

            </Nav>
          

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Menu;