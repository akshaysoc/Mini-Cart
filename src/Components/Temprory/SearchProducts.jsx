import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import logo1 from '../Navbars/images/log.jpg';

const Product = () => {
  const [pro, setPro] = useState([]);
  const [search,setSearch] = useState("");
  const navigate = useNavigate();

  
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

  return (
    <>
      {/* <h1 style={{color:'rgb(252, 252, 29)', fontFamily:'"Trebuchet MS", Helvetica, sans-serif',textAlign:'center',marginTop:'3vh'}}>Products</h1> */}
      <div style={{height:'35vh',display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:'15vh'}}>
      {/* <img src={logo1} width="100" height="60"  alt="Minicart logo" /> */}
      <div class="input-group" style={{height:'4vh',marginBottom:'5vh',width:'35vw',marginTop:'4vh'}}>
      
      <input type="text" class="form-control" placeholder="Search For Products..." onChange={(event)=>{setSearch(event.target.value)}}/>
      <button class="btn btn-secondary" style={{width:'10vw'}}  onClick={productSearch}>Search</button>
      </div></div>
      <div className="container">

      
        <div className="row text-center mb-3 section">
          {pro.map((val, key) => {
            return (
              <Card style={{ width: '15rem',marginRight:'2vw', marginBottom:'20px', marginTop:'2vh'}} key={key}>
              <Card.Img variant="top" src={val.thumbnail} style={{height:'50%'}}/>
              <Card.Body style={{height:'130px'}}>
                <Card.Title style={{fontSize:'12px'}}>{val.title}</Card.Title>
                <Card.Text>Price :${val.price}</Card.Text>
                <div><Button variant="secondary" style={{width:'10vw'}}>Buy</Button></div>
            
              </Card.Body>
            </Card>
            );
          })}
        </div>
      </div>
    </>
   );
};

export default Product;
