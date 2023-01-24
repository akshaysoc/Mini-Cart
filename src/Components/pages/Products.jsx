import Offcanvas from 'react-bootstrap/Offcanvas';
import React,{useState,useEffect} from 'react';
import { Button } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom";
import logo1 from '../Navbars/images/log.jpg';
import './css/product.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Footer from '../Footer/Footer';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navgate=useNavigate();
  const [user, setUser] = useState([]);

  useEffect(()=>{
    let username = sessionStorage.getItem('username');
    if(username ===''|| username===null){
        navgate('/home');
    }
    else{
      sessionStorage.setItem("username", username);
          setUser(username)
    }
},[]);

  const [button,setButton] = useState([]);
  const [products,setProducts] = useState([]);

  const [pro, setPro] = useState([]);
  const [search,setSearch] = useState("");
  // const navigate = useNavigate();
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=68")
      .then((response) => response.json())
      .then((data) => {
        setProd(data.products);
        console.log(data.products);
      });
  }, []);

  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((data)=>{
        setButton(data);
        // console.log(data);

    });
},[]);

  function productDetails(val)
  
  {
       console.log("this is", val);
      fetch(`https://dummyjson.com/products/category/${val}?limit=4`)
      .then(res => res.json())
      .then((data)=>{

          setProducts(data.products);
          console.log(data.products);

      }); 
  }

  function productSearch()
  {
    if(search.length>0)
    {
      
        fetch(`https://dummyjson.com/products/search?q=${search}`)
          .then((response) => response.json())
          .then((data) => {
            setPro(data.products);
            console.log(data.products);
          });
          // navigate(`/product?q=${search}`)
    }
  }

  // function details(){
  //   fetch(`https://dummyjson.com/products/${val}`)
  //   .then(res => res.json())
  //   .then((data)=>{

  //       setProd(data.products);
  //       console.log(data.products);

  //   }); 
  // }

  return (
    <>
    <div className='topbar'>
      <img src={logo1} width="100" height="60"  alt="Minicart logo" />
      <Button variant="primary" onClick={handleShow} className="me-2">{'Category'}</Button> 
      <div class="input-group" style={{height:'4vh',marginBottom:'5vh',width:'35vw',marginTop:'4vh'}}>
      <input type="text" class="form-control" placeholder="Search For Products..." onChange={(event)=>{setSearch(event.target.value)}}/>
      <button class="btn btn-secondary" style={{width:'10vw'}}  onClick={productSearch}>Search</button>
      </div>
      <DropdownButton title={'My Profile'} className='logoutbtn' style={{border:'none'}} variant='rgb(252, 252, 29)'>
              <Dropdown.Item href="#placement">👤{user}</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="#placement">Orders</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="#placement">Wishlist</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="/cart">My Cart</Dropdown.Item><Dropdown.Divider />
              <Dropdown.Item href="/login">Log Out</Dropdown.Item>
            </DropdownButton>
      </div>
      
      <Offcanvas show={show} onHide={handleClose} {...props} style={{height:'35vh'}}>
        <Offcanvas.Header style={{backgroundColor:'rgb(101, 127, 137)'}} closeButton>
          <Offcanvas.Title >Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'rgb(52, 73, 82)'}}>
        <div>
                {button.map((val,key)=>{
                    return(
                  
                      <input type="button" className='btn btn-secondary ms-3 mb-3' style={{width:'150px'}} onClick={()=>productDetails(val)} key ={key} value={val}/> 
                       
                    )
                })}
        </div>
        
        </Offcanvas.Body>
      </Offcanvas>
     
      <div className="container cage">
         <div className="row text-center col-12 cag">
           {products.map((val, key) => {
              return (
                <Card style={{ width: '15rem',marginLeft:'2vw', marginBottom:'20px',marginTop:'2vh'}} key={key}>
                <Card.Img variant="top" src={val.thumbnail} style={{height:'50%'}}/>
                <Card.Body style={{height:'130px'}}>
                  <Card.Title style={{fontSize:'12px'}}>{val.title}</Card.Title>
                  <Card.Text>Price :${val.price}</Card.Text>
                  <div>
                      <Link className='btn btn-secondary' to={`/productdetail/${val.id}`} style={{width:'10vw'}}>Buy Now</Link>
               </div>
                </Card.Body>
              </Card>
              );
           })}
         </div>
       </div>
       
       <div className="container serc">
        <div className="row text-center mb-3 section">
          {pro.map((val, key) => {
            return (
              <Card style={{ width: '15rem',marginRight:'2vw', marginBottom:'20px', marginTop:'2vh'}} key={key}>
              <Card.Img variant="top" src={val.thumbnail} style={{height:'50%'}}/>
              <Card.Body style={{height:'130px'}}>
                <Card.Title style={{fontSize:'12px'}}>{val.title}</Card.Title>
                <Card.Text>Price :${val.price}</Card.Text>
                <div>
                      <Link className='btn btn-secondary' to={`/productdetail/${val.id}`} style={{width:'10vw'}}>Buy Now</Link>
               </div>
              </Card.Body>
            </Card>
            );
          })}
        </div>
      </div>
     
      <div className="container alp">
        <div className="row text-center" style={{marginLeft:'4vw'}}>
          {prod.map((val, key) => {
            return (
              <Card style={{ width: '15rem',marginLeft:'3vw', marginBottom:'20px'}} key={key}>
              <Card.Img variant="top" src={val.thumbnail} style={{height:'50%'}}/>
              <Card.Body style={{height:'80px'}}>
                <Card.Title style={{fontSize:'12px'}}>{val.title}</Card.Title>
                <Card.Text>Price :${val.price}</Card.Text>
                <div>
                      <Link className='btn btn-secondary' to={`/productdetail/${val.id}`} style={{width:'10vw'}}>Buy Now</Link>
               </div>
            </Card.Body>
            </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

function Example() {
  return (
    <>
        {['top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;