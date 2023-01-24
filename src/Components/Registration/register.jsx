import { useFormik } from "formik";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { message } from "./ErrorMessage";
import logo2 from '../Navbars/images/log.jpg'
import './css/regis.css'

const Component2 = () => {
    const navigate=useNavigate();
  
  
    const formik = useFormik({
   
   
    initialValues: {
      id: "",
      name: "",
      email: "",
      phoneNo: "",
      password: "",
      cpassword: "",
      address: "",
    },
   
   
    validationSchema: Yup.object({

        id : Yup.string()
           .min(2,"must be atleast 2 characters")
           .max(10,"must be less than 10 characters ")
           .required("Username cannot be null"),


      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(15, "Must be 15 characters or less")
        .required(message.required),


        password : Yup.string()
                      .min(8,"Must be atleast 8 characters")
                      .required("password is required"),


        email: Yup.string()
                .email(message.email)
                .required("Required"),


        phoneNo: Yup.string()
                   .matches(
                  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                   "Not a valid phone number"
                  )
                  .required("Required"),
        
        cpassword : Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
      console.log(values)
      fetch("http://localhost:5000/user",{
            method:"POST",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(values)
        }).then((res)=>{
            alert("Registered Successfully")
            navigate('/login');
        }).catch((err)=>{
            alert("Registeration failed")
        });
    },
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <>
    <div className="background">
    <div className="">
      <form className="container" onSubmit={formik.handleSubmit}>
        <div className="card shadow-lg  crdr">
            <div className="card-header crdhr">
                        <img
                            src={logo2}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Minicart logo"
                        />
                        <div>
                        <h2><span style={{fontSize:'15px', color:'rgb(252, 252, 29)'}}>Mini Cart<br/></span>User Registration</h2>
                        </div>
            </div>
            <div className="card-body crdbr">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="name">User Name</label>
                            <input id="id" className="form-control" type="text" {...formik.getFieldProps("id")} />
                            {/* {formik.touched.id && !formik.errors.id ? <>✅</> : <>❎</>} */}
                            {formik.touched.id && formik.errors.id && (
                              <span style={{color:'red'}} >{formik.errors.id}</span>)}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" className="form-control" {...formik.getFieldProps("email")} />
                            {/* {formik.touched.email && formik.errors.email ? <>✅</> : <>❎</>} */}
                            {formik.touched.email && formik.errors.email && (
                              <span style={{color:'red'}}>{formik.errors.email}</span>)}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input id="name" className="form-control" type="text" {...formik.getFieldProps("name")} />
                            {/* {formik.touched.name && !formik.errors.name ? <>✅</> : <>❎</>} */}
                            {formik.touched.name && formik.errors.name && (
                              <span style={{color:'red'}}>{formik.errors.name}</span>)}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="phoneNo">Password</label>
                            <input id="password" type="password" className="form-control" {...formik.getFieldProps("password")}/>
                            {/* {formik.touched.password && formik.errors.password ? <>✅</> : <>❎</>} */}
                            {formik.touched.password && formik.errors.password && (
                              <span style={{color:'red'}}>{formik.errors.password}</span>)}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="phoneNo">Phone Number</label>
                            <input id="phoneNo" type="text" className="form-control" {...formik.getFieldProps("phoneNo")}/>
                            {/* {formik.touched.phoneNo && formik.errors.phoneNo ? <>✅</> : <>❎</>} */}
                            {formik.touched.phoneNo && formik.errors.phoneNo && (
                              <span style={{color:'red'}}>{formik.errors.phoneNo}</span>)}

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="phoneNo">Confirm Password</label>
                            <input id="cpassword" type="password" className="form-control" {...formik.getFieldProps("cpassword")}/>
                            {/* {formik.touched.password && formik.errors.password ? <>✅</> : <>❎</>} */}
                            {/* {formik.touched.password && formik.errors.password && (
                              <span style={{color:'red'}}>{formik.errors.password}</span>)} */}
                        </div>
                    </div>
                    
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label htmlFor="">Address</label>
                            <textarea className="form-control" {...formik.getFieldProps("address")}/>       
                        </div>
                    </div>

                </div>
            </div>
            <div className="card-footer crdfr">
                    <button type="submit" className="btn btn-primary btr">Submit</button> 
                    <Link className="btn btn-danger ms-2 btr" to={'/home'}>Close</Link>
            </div>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default Component2;