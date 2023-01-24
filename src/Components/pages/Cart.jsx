import React,{useState,useEffect} from "react";
import Carts from '../Database/db.json';
import { Link } from 'react-router-dom';
import Cnav from '../Navbars/Navbar3'

function Cart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Carts.cart)
    }, []);
    
    const Remove=(id)=>{
        if(window.confirm('Do You want to remove?')){
            fetch("http://localhost:5000/cart/"+ id,{
                method:'DELETE'
        }).then((res)=>{
            alert('Removed Sucessfully')
            window.location.reload();        
        }).catch((err)=>{
            alert.err("failed"+err)
        });
        }
    }

    const [count, setCount] = useState(0);
    // const Add=(id)=>{
    //     setCount(count + 1);
    //     fetch("http://localhost:5000/cart/"+ id,{
    //             method:'PUT',
    //             body:JSON.stringify(data)
    //     }).then((res)=>{
    //         alert('removed SUcessfully')
    //         window.location.reload();        
    //     }).catch((err)=>{
    //         alert.err("Login fail"+err)
    //     });
        
    // }

    return(
        
        <>
        <Cnav />
        <div>
        <div className="cont" style={{height:'500px',paddingTop:'5vh'}}>
        {data.map((item) => {
              return (
                            
        <div className="card shadow-lg" style={{height:'36vh',width:'80vw', marginLeft:'10vw', marginTop:'3vh'}} key={item.id}>
        <div className="row align-items-center " style={{padding:'2vw'}}>
            <div className="col" style={{height:'25vh',width:'15vw',marginLeft:'4vw'}}>
            <img src={item.thumbnail} style={{ height: "205px",border:'1px solid black' }} />
            </div>

            <div className="col col-4">
                <p><b>{item.title}</b></p>
                <p><b>Category :</b>{item.category}</p>
                <p className="text-justify"><b>Description :</b>{item.description}</p>
            </div>

            {/* <div className=" col">
                <p><b>Qantity :</b></p>
                <div className="input-group">
                    <button  className="btn btn-dark" onClick={()=>setCount(count-1)}>-</button>
                    <input type="number" min="0" value={count} className='form-control'/>
                    <button  className="btn btn-dark" onClick={()=>setCount(count+1)}>+</button>
                </div>
            </div> */}

            <div className="col text-center" ><b>Price :</b> ${item.price}</div>
            <div className="col text-center" >
                <Link className="btn btn-dark mb-1" style={{width:'150px'}} to={`/checkout/${item.id}`}>Buy Now</Link>
                <Link onClick={()=>{Remove(item.id)}} className="btn btn-dark" style={{width:'150px'}}>Remove</Link>
            </div>
        </div>
        </div>
        );

        })}
        </div>
        </div>
        
        </>
    )
}

export default Cart;