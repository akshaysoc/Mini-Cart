import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import logo1 from '../Navbars/images/log.jpg';

function Checkout(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartId = useParams()
  let cid = cartId.id;
// console.log(cid);

  const [username, usernameshow]=useState("");
  const [name, nameshow]=useState("");
  const [email, emailshow]=useState("");
  const [phoneNo, phonshow]=useState("");
  const [address, addressshow]=useState("");

  const[title, titleshow]=useState("");
  const[image, imageshow]=useState("");
  const[price, priceshow]=useState("");
  const[description, descriptionshow]=useState("");

  const [user, setUser] = useState([]);

  useEffect(()=>{
    let username = sessionStorage.getItem('username');
      sessionStorage.setItem("username", username);
          setUser(username);

    fetch("http://localhost:5000/user/"+ username).then((res)=>{
    return res.json();
    }).then((resp)=>{
      usernameshow(resp.id);
      nameshow(resp.name);
      emailshow(resp.email);
      phonshow(resp.phoneNo)
      addressshow(resp.address)
    }).catch((err)=>{
      alert.err("failed"+err)
    });

    fetch("http://localhost:5000/cart/"+ cid).then((res)=>{
    return res.json();
    }).then((resp)=>{
      titleshow(resp.title);
      imageshow(resp.thumbnail);
      priceshow(resp.price);
      descriptionshow(resp.description);
    }).catch((err)=>{
    alert.err("failed"+err)
    });
  })


    return(
        <>
  <div className="container">
  <div className="py-5 text-center" style={{color:'rgb(252, 252, 29)'}}>
  <img
                            src={logo1}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Minicart logo"
                            />
    <h2>Mini-Cart Checkout</h2>
 </div>

  <div className="row">
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span>Your cart</span>
        <span>#3347</span>
      </h4>
      <ul className="list-group mb-3">
        
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <img src={image} height='200px' style={{marginLeft:'6vw'}} className=''/>
            <h6 className="my-0 mt-2">{title}</h6>
            <small>{description}</small>
          </div>
        </li>
        
        {/* <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">-$5</span>
        </li> */}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${price}</strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>

    <div className="col-md-8 order-md-1" >
      <h4 className="mb-3 ">Billing Details</h4>
      <form className="checkout-form p-4 "style={{backgroundColor:'white', borderRadius:'6px'}}>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label for="firstName">Full Name</label>
            <input type="text" className="form-control" id="firstName"  disabled='disabled' value={name} />
          </div>
          <div className="col-md-6 mb-3">
            <label for="userName">Username</label>
            <input type="text" className="form-control" id="userName"  disabled='disabled' value={username} />
          </div>
        </div>

        <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email </label>
          <input type="email" className="form-control" id="email" disabled='disabled'value={email}/>
        </div>
        <div className="col-md-6 mb-3">
          <label for="mobile">Mobile No </label>
          <input type="number" className="form-control" id="mobile" disabled='disabled'value={phoneNo}/>
        </div>
        </div>

        <div className="mb-3">
          <label for="address">Address</label>
          <input type="text" className="form-control" disabled='disabled' id="address" value={address} required/>
        </div>

        <div className="mb-3">
          <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
        </div>

        <div className="row">
          <div className="col-md-5 mb-3">
            <label for="country">Country</label>
            <select className="custom-select d-block w-100 form-control" id="country" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <label for="state">State</label>
            <select className="custom-select d-block w-100 form-control" id="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
          </div>

          <div className="col-md-3 mb-3">
            <label for="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required/>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>

        <hr className="mb-4"/>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="same-address"/>
          <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="save-info"/>
          <label className="custom-control-label" for="save-info">Save this information for next time</label>
        </div>
        <hr className="mb-4"/>

        <h4 className="mb-3">Payment</h4>

        <div className="d-block my-3">
          <div className="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input"   required/>
            <label className="custom-control-label me-3" for="credit">Credit card</label>
            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
            <label className="custom-control-label me-3" for="debit">Debit card</label>
            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
            <label className="custom-control-label me-3" for="paypal">PayPal</label>
            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
            <label className="custom-control-label" for="cash">Cash on Delivery</label>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label for="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required/>
            <small className="text-muted">Full name as displayed on card</small>
          </div>

          <div className="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
          </div>
          <div className="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>           
          </div>
        </div>

        <hr className="mb-4"/>
        <Link className="btn btn-success btn-md btn-block" onClick={handleShow} type="submit">Continue to checkout</Link>
      </form>
    </div>
  </div>

  <footer className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2017-2019 Company Name</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="/">Privacy</a></li>
      <li className="list-inline-item"><a href="/">Terms</a></li>
      <li className="list-inline-item"><a href="/">Support</a></li>
    </ul>
  </footer>
 </div>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order for<b> {title} </b>has been placed sucessfully!</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>Cancel</Button> */}
          <Link type="submit" className="btn btn-success" to={'/userhome'}>Continue Shopping</Link> 
        </Modal.Footer>
      </Modal>
        </>
    )
}


export default Checkout;