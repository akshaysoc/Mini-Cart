import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Search from './ProductList';

const Productall = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=16")
      .then((response) => response.json())
      .then((data) => {
        setProd(data.products);
        console.log(data.products);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row text-center" style={{marginLeft:'4vw'}}>
          {prod.map((val, key) => {
            return (
              <Card style={{ width: '15rem',marginLeft:'3vw', marginBottom:'20px'}} key={key}>
              <Card.Img variant="top" src={val.thumbnail} style={{height:'50%'}}/>
              <Card.Body style={{height:'80px'}}>
                <Card.Title style={{fontSize:'12px'}}>{val.title}</Card.Title>
                <Card.Text>Price :${val.price}</Card.Text>
                <div><Button variant="secondary" style={{width:'10vw'}} >Buy Now</Button></div>
              </Card.Body>
            </Card>
            );
          })}
        </div>
      </div>
    
    </>
  );
};

export default Productall;
