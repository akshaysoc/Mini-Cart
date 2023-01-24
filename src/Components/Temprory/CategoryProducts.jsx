import React,{useState,useEffect} from 'react';
import { Button } from 'reactstrap';
import Card from 'react-bootstrap/Card';


const Category = ()=>{

    const [button,setButton] = useState([]);
    const [products,setProducts] = useState([]);



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


    return(
      <>
        <div>
                {button.map((val,key)=>{
                    return(
                     
                        <input type="button" className='btn btn-secondary ms-3 mb-3'  onClick={()=>productDetails(val)} key ={key} value={val}/>  
                       
                    )
                })}
        </div>
         <div className="container">
            
                  
         <div className="row text-center">
           {products.map((val, key) => {
             
              return (
                <Card style={{ width: '15rem',marginLeft:'3vw', marginBottom:'20px'}} key={key}>
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
    )


}

export default Category;