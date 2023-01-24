import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo1 from './images/log.jpg';
import { Link } from 'react-router-dom';

function CartNavbar(){
  const usnavigate=useNavigate();
  const [user, setUser] = useState([]);

  useEffect(()=>{
    let username = sessionStorage.getItem('username');
    if(username ===''|| username===null){
        usnavigate('/home');
    }
    else{
      sessionStorage.setItem("username", username);
          setUser(username)
    }
},[]);
    return(
        <>
        
        <div className='topbar'>
            <img src={logo1} width="100" height="60"  alt="Minicart logo" />
            <Link class="btn btn-secondary ms-3" to={'/cart'} style={{width:'10vw'}} >Show Cart</Link>
            <DropdownButton title={'My Profile'} className='logoutbtn' style={{border:'none'}} variant='rgb(252, 252, 29)'>
              <Dropdown.Item href="#placement">👤{user}</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="#placement">Orders</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="#placement">Wishlist</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="/cart">My Cart</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="/login">Log Out</Dropdown.Item>
            </DropdownButton>
        </div>
        
        </>
    )
}

export default CartNavbar;