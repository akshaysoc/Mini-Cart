import React,{useState,useEffect} from "react";
import Carts from '../Database/db.json';
import { Link, useNavigate } from 'react-router-dom';
import Cnav from '../Navbars/Navbar3'

function Cart() {

    const navigate=useNavigate();
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
    let total=0;
    const [tprice, cash]=useState("");
    const [id, itemid]=useState("");
    const [itemCount, setItemCount] = useState(1);
    // {data.map((item) => {
    // setprice(count*(item.price))
    // })}
    

   
        // data.map((item) => {
        //      var t=count*(item.price)
        //      setprice(count)
        // })
        console.log(tprice);
   

    // const submit=(e)=>{
    //     let ojb={total};
    //     // console.log(ojb);
    //     e.preventDefault();
    //     fetch("http://localhost:5000/cart/"+ id,{
    //         method:"PUT",
    //         headers:{'content-type': 'application/json'},
    //         body:JSON.stringify(ojb)
    //     }).then((res)=>{
    //         alert("Successfully changed Password")
    //         navigate('/checkout');
    //     }).catch((err)=>{
    //         alert("failed")
    //     });
    // }

    // function handleCountChange(id, price, change) {
    //     let newState = itemCount;
    //     const index = newState.findIndex( item => item.id == id );
    //     if(index >= 0) {
    //         newState[index] ={
    //             id: id,
    //             quantity: newState[index].quantity + change,
    //             price: price
    //         };
    //     }
    //     else {
    //         newState.concat([
    //             {
    //                 id: id,
    //                 quantity: 1,
    //                 price: price
    //             }
    //         ]);
    //     }
    //     setItemCount(newState);
    // }

    // function getQuantity(id) {
    //     const index = itemCount.findIndex( item => item.id == id );
    //     if(index >= 0) {
    //        return itemCount[index].quantity;
    //     }
    //     else {
    //        return 0;
    //     }
    // }

    function getTotal() {
        return itemCount.reduce((accumlator, currVal) => accumlator + (currVal.quantity * currVal.price))
    }

    return(
        
        <>
        <Cnav />
        <div>
        <div className="cont" style={{height:'500px',paddingTop:'5vh'}}>
        {data.map((item,key) => {
              return (
                           
        <div className="card shadow-lg" style={{height:'36vh',width:'80vw', marginLeft:'10vw', marginTop:'3vh'}} key={item.id}>
             {/* {itemid(key)} */}
        <div className="row align-items-center " style={{padding:'2vw'}}>
            <div className="col" style={{height:'25vh',width:'15vw',marginLeft:'4vw'}}>
            <img src={item.thumbnail} style={{ height: "205px",border:'1px solid black' }} />
            </div>

            <div className="col col-4">
                <p><b>{item.title}</b></p>
                <p><b>Category :</b>{item.category}</p>
                <p className="text-justify"><b>Description :</b>{item.description}</p>
            </div>

            <div className=" col">
                <p><b>Qantity :</b></p>
                <div className="input-group">
                    <button  className="btn btn-dark" onClick={() => setItemCount(itemCount- 1)}>-</button>
                    <input type="number" min="1" value={itemCount} className='form-control'/>
                    <button  className="btn btn-dark" onClick={() =>setItemCount(itemCount+ 1)}>+</button>
                </div>
            </div>

            <div className="col text-center" ><b>Price :</b>{total=itemCount*item.price}
            {/* <input value={total=count*item.price} onChange={e=>cash(e.target.value)} style={{}}/> */}</div>
            <div className="col text-center" >
                
                <Link onClick={()=>{Remove(item.id)}} className="btn btn-dark" style={{width:'150px'}}>Remove</Link>
            </div>
        </div>
        </div>
        
        );

        })}
        <Link className="btn btn-dark mb-1 mt-4" type="submit"  style={{width:'150px',marginLeft:'45vw'}} to={`/checkout`} >Buy Now</Link>
        </div>
        </div>
        
        </>
    )
}

export default Cart;
//to={`/checkout/${total}`}
//onClick={()=>cash(total)}