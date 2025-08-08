import React from 'react'
import "./Education.css"
import ed from "../../assets/education.svg"
function Education() {
  return ( <>
  <div className='container mt-5'>
    <div className='row'>
      <div className='col-6'  style={{
    marginTop:"7rem"
  }}>
        <div className='ed-img'>
          <img src={ed} alt="ed img" />
        </div>
      </div>
        <div className='col-6'  style={{
    marginTop:"7rem"
  }}>
          <div className='heading'><h3>Free and open market education</h3></div>
          <div className='para mt-5'><p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <div className='link ' style={{
  fontSize:"1.2rem"
}}><a href="">Varsity <i className="fa-solid fa-arrow-right"></i></a></div></div>
<div className='para mt-5'><p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <div className='link ' style={{
  fontSize:"1.2rem"
}}><a href="">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a></div></div>
        </div>
    </div>
  </div>
  </> );
}

export default Education;