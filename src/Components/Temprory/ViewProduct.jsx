import Prod from '../pages/pro.json';
import { Link } from "react-router-dom";
import './css/product.css';
import { useState, useEffect } from 'react';

function ViewProduct(){
    const [pro, setPro] = useState([]);

    useEffect(() => {
      setPro(Prod.Products)
    }, []);
    console.log(Prod.Products)
    return(
        <>
        <div>
      <h1 style={{color:'rgb(252, 252, 29)', fontFamily:'"Trebuchet MS", Helvetica, sans-serif',textAlign:'center',marginTop:'3vh'}}>Top Deals</h1>
      
      <div className="container mb-2">
        <div className="row text-center">
          {pro.slice(0,8).map((val, key) => {
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
      <Link className="btn btn-success sp"  to={'/product'}>Show All Products</Link>
      </div>
        </>
    )
}

export default ViewProduct;