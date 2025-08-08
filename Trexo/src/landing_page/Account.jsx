import React from 'react'
import { Link } from "react-router-dom";
import signupp from "./Signupp.jsx"
import SignUpPage from './signup/signUpPage.jsx';
function Account() {
  return (
    <>
  <div className='container ' style={{
    marginTop:"2rem"
  }}>
    <div className='row  '>
    <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{
    marginTop:"7rem"
  }}>
 <div className='heading' ><h3 style={
  {
    fontSize:"40px"
  }
 }>Open a Zerodha account</h3>
 </div>
 <div className='para mt-5'>
  <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
 </div>
<div className='bt  mt-5'>


<Link to="/signnup">
  <button type="button" className="btn btn-primary">Sign Up for free</button>
</Link>

  </div>  </div>  </div>
  </div>
    </>
    );
}

export default Account;