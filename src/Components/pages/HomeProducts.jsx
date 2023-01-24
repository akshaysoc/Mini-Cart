import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pro from './product.json';
import './css/product.css';
import Cro from '../Carosel/carosel1';
import Cro1 from '../Carosel/carosel2';

const Product = () => {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    setPro(Pro.Products)
  }, []);
  console.log(Pro.Products)

  return (
    <>
      <div>
      <h1 style={{color:'rgb(252, 252, 29)', fontFamily:'"Trebuchet MS", Helvetica, sans-serif',textAlign:'center',marginTop:'3vh'}}>Top Deals</h1>
      
      <div className="container mb-4">
        <div className="row text-center">
          {pro.slice(0,8).map((val, key) => {
             return (
              
              <div className="col-md-3 mt-5">
                <Link to='/login'style={{textDecoration:'none'}}>
                <div className="card shadow-lg" style={{height: '22rem',width:'17rem', border:'none'}} key={key}>
                    <div style={{height:'50px', width:'17rem'}}>
                    <img src={val.thumbnail} className='card-img-top' />
                   </div>
                  <div className="card-body" style={{height:'75px'}}>
                  </div>
                  <div className="card-footer crdfp" style={{height:'95px',textDecoration:'none'}}>
                  <p>{val.title}</p>
                    <Link className='btn btn-primary' to={'/login'}>Buy Now</Link>

                  </div>
                </div></Link>
              </div>
              
            );
          })}
        </div>
      </div>
      </div>
      
      <Cro />

      <div>
      <div className="container mb-4">
        <div className="row text-center">
          {pro.slice(8,16).map((val, key) => {
             return (
              <div className="col-md-3 mt-5">
                <Link to='/login'style={{textDecoration:'none'}}>
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
                    <Link className='btn btn-primary' to={'/login'}>Buy Now</Link>
                  </div>
                </div></Link>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      <Cro1 />

      <div>
      <div className="container mb-4">
        <div className="row text-center">
          {pro.slice(16,20).map((val, key) => {
             return (
              <div className="col-md-3 mt-5">
                <Link to='/login'style={{textDecoration:'none'}}>
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
                    <Link className='btn btn-primary' to={'/login'}>Buy Now</Link>

                  </div>
                </div></Link>
              </div>
            );
          })}
        </div>
      </div>
      <Link className="btn btn-success sp"  to={'/login'}>Show All Products</Link>
      </div>


    </>
  );
};

export default Product;
