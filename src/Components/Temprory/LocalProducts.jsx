import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Aession} from '../pages/session';
import './css/product.css'

const Product = () => {
  const [pro, setPro] = useState([]);
  Aession();
  useEffect(() => {
    fetch("http://localhost:3000/Products")
      .then((response) => response.json())
      .then((data) => {
        setPro(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
      <h1 style={{color:'rgb(252, 252, 29)', fontFamily:'"Trebuchet MS", Helvetica, sans-serif',textAlign:'center',marginTop:'3vh'}}>Our Products</h1>

      <div className="container">
        <div className="row text-center">
          {pro.map((val, key) => {
            return (
              <div className="col-md-3 mt-5">
                <div className="card shadow-lg" style={{height: '22rem',width:'17rem', border:'none'}} key={key}>
                    <div style={{height:'50px', width:'17rem'}}>
                    <img src={val.thumbnail} className='card-img-top' />
                   </div>
                  <div className="card-body" style={{height:'75px'}}>
                  
                    {/* <p style={{fontSize:'12px'}}>{val.description}</p> */}
                    {/* <p>{val.price}</p> */}
                  </div>
                  <div className="card-footer crdfp" style={{height:'95px'}}>
                  <p>{val.title}</p>
                    <Link className='btn btn-primary'>Buy Now</Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default Product;
