import React,{useState,useEffect} from "react"
import {useParams, Link, useNavigate} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartNav from '../Navbars/Navbar3';
import Footer from '../Footer/Footer';

function ProductDetail() {
    const nextpage=useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const {id}=useParams();
    // console.log(id);
    
      
    useEffect(() => {
        fetchData(id);
    }, []);

    const fetchData = () => {
        
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((pdata) => {
                setData(pdata)
                // console.log('111',pdata);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    const Data = ()=>{
        fetch("  http://localhost:5000/cart",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        }).then((res)=>{
            nextpage('/cart');
        })
    }  
    
    
    return (
        <>
        <CartNav />
        <div>
            <div className="container alp">
                <div className="row text-center" style={{marginLeft:'24vw', marginTop:'3vh'}}>
                   
                         
                        <Card style={{ width: '40rem',height:'100vh',marginLeft:'0vw', marginBottom:'20px'}} >
                            <Card.Img variant="top" src={data.thumbnail} style={{height:'50%'}}/>
                            <Card.Body style={{height:'80px'}}>
                            <Card.Title style={{fontSize:'25px'}}>{data.title}</Card.Title>
                            {/* <Card.Text style={{textAlign:'left'}}><b>Details :</b>{data.description}</Card.Text>
                            <Card.Text style={{textAlign:'left'}}><b>Brand :</b>{data.brand}</Card.Text>
                            <Card.Text style={{textAlign:'left'}}><b>In Stock :</b>{data.stock}</Card.Text>
                            <Card.Text style={{textAlign:'left'}}><b>Price :</b>${data.price}</Card.Text> */}
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{textAlign:'left'}}><b>Details :</b>{data.description}</ListGroup.Item>
                                <ListGroup.Item style={{textAlign:'left'}}><b>Brand :</b>{data.brand}</ListGroup.Item>
                                <ListGroup.Item style={{textAlign:'left'}}><b>In Stock :</b>{data.stock}</ListGroup.Item>
                                <ListGroup.Item style={{textAlign:'left'}}><b>Price :</b>${data.price}</ListGroup.Item>
                            </ListGroup>
                        <div>
                            {/* <Link className='btn btn-secondary me-3' style={{width:'15vw',marginTop:'3vh'}} to={`/checkout/${data.id}`}>Buy Now</Link> */}
                            <Link className='btn btn-secondary' style={{width:'15vw',marginTop:'3vh'}} onClick={handleShow}>Add to Cart</Link>
                            </div>
                            </Card.Body>
                        </Card>
                
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Want to Add to Cart</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} href="/product">Cancel</Button>
          <button type="submit" className="btn btn-primary" onClick={Data}>ADD</button> 
        </Modal.Footer>
      </Modal>
      <Footer />
      </>
    )
}

export default ProductDetail;