import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './css/login.css'
import logo1 from '../Navbars/images/log.jpg'
import { useEffect } from "react";

function ForgotPassword(){
    const navigate=useNavigate();
    const [username,UserName]=useState("");
    const [password,NewPassword]=useState("");
    const [cpassword, ConfirmPassword]=useState("");
    const [email, Email]=useState("");
    const [phoneNo, Phone]=useState("");
    const [name, Name]=useState("");
    const [address, Address]=useState("");

    useEffect(()=>{
        fetch("http://localhost:5000/user/"+ username).then((res)=>{
    return res.json();
    }).then((resp)=>{
      UserName(resp.id);
      Email(resp.email);
      Phone(resp.phoneNo);
      Name(resp.name);
      Address(resp.address);
    }).catch((err)=>{
      alert.err("failed"+err)
    });
    })
    // console.log('123',username);

    const submit=(e)=>{
        let ojb={username,name,email,phoneNo,password,cpassword,address};
        // console.log(ojb);
        e.preventDefault();
        fetch("http://localhost:5000/user/"+ username,{
            method:"PUT",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(ojb)
        }).then((res)=>{
            alert("Successfully changed Password")
            navigate('/login');
        }).catch((err)=>{
            alert("failed")
        });
    }
    // function validation(){

    // }

    return(
        <>
        <div className="backgroundcl">
        <div className="row">
            <div className="  ">
                <form onSubmit={submit} className="container">
                <div className="card shadow-lg  crd">
                    <div className="card-header crdh">
                    <Link to={"/home"}> 
                            <img
                            src={logo1}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Minicart logo"
                            />
                    </Link>
                            <div>
                        
                        <h2><span style={{fontSize:'15px', color:'rgb(252, 252, 29)'}}>Mini Cart<br/></span>User Reset Password</h2>
                        </div>
                    </div>
                
                <div className="card-body crdb" style={{height: '32vh'}}>
                    <div className="form-group cb">
                        <label htmlFor="">User Name</label>
                        <input value={username} onChange={e=>UserName(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="form-group mt-2 cb">
                        <label htmlFor="">New Password</label>
                        <input value={password} onChange={e=>NewPassword(e.target.value)} type="password" className="form-control" />
                    </div>
                    <div className="form-group mt-2 cb">
                        <label htmlFor="">Password</label>
                        <input value={cpassword} onChange={e=>ConfirmPassword(e.target.value)} type="password" className="form-control" />
                    </div>
                </div>
                <div className="card-footer crdf">
                        <button type="submit" className="btn btn-success  bt" >Save</button> <br/>
                        <Link className="btn btn-danger ms-2  bt" to={'/login'}>Cancel</Link>
                </div>
                </div>
                </form>
            </div>

        </div>
        </div>
        </>
    )
}

export default ForgotPassword;