import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './css/login.css'
import logo1 from '../Navbars/images/log.jpg'
import { useEffect } from "react";

function Loginpage(){
    useEffect(()=>{
        sessionStorage.clear();
    },[]);
    
    const [username, usernameupdate]=useState("");
    const [password, passwordupdate]=useState("");

    const navgate= useNavigate();
    const ProceedLogin=(e)=>{
        e.preventDefault();
        fetch("http://localhost:5000/user/"+ username).then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log(resp)
            if(Object.keys(resp).length ===0){
                alert("enter valid username")  
            } else {
                if(resp.password ===password){
                    alert('sucessfully login');
                    sessionStorage.setItem('username',username);
                    navgate('/userhome')
                } else{
                    alert("enter valid password")   
                }
            }
        }).catch((err)=>{
            alert.err("Login fail"+err)
        });
            
    }
    return(
        <div className="backgroundcl">
        <div className="row">
            <div className="  ">
                <form onSubmit={ProceedLogin} className="container">
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
                        
                        <h2><span style={{fontSize:'15px', color:'rgb(252, 252, 29)'}}>Mini Cart<br/></span>User Login</h2>
                        </div>
                    </div>
                
                <div className="card-body crdb">
                    <div className="form-group cb">
                        <label htmlFor="">User Name</label>
                        <input value={username} onChange={e=>usernameupdate(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="form-group mt-2 cb">
                        <label htmlFor="">Password</label>
                        <input value={password} onChange={e=>passwordupdate(e.target.value)} type="password" className="form-control" />
                        <div><Link to={'/forgot'} style={{color:'white'}}>Forgot Password?</Link></div>
                    </div>
                </div>
               
                <div className="card-footer crdf">
                        <button type="submit" className="btn btn-primary  bt" >Login</button> <br/>
                        <Link className="btn btn-success ms-2  bt" to={'/regis'}>New User</Link>
                </div>
                </div>
                </form>
            </div>

        </div>
        </div>
    )
}
export default Loginpage;