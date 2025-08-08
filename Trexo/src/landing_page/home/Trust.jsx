import React from 'react'
import eco from "../../assets/ecosystem.png";
import presslogo from "../../assets/presslogos.png";
function Trust() {
  return ( 
    <>
    <div className='container ' style={{
      marginTop:"5rem"
    }} >
   <div className='row'>
    <div className='col-6'  style={{
    marginTop:"5rem"
  }}>
 <div className='heading' style={{
    marginLeft:"8rem"
   
  }}>
<h2>Trust with Confidence</h2>
 </div>
 <div className='paras mt-5' style={{
    marginLeft:"8rem"
   
  }}>
  <div className='box mt-3'>
    <h5>Customer-first always</h5>
    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
  </div>
  <div className='box mt-3'>
    <h5>No spam or gimmickss</h5>
    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
  </div>
  <div className='box mt-3'>
    <h5>The Zerodha universe</h5>
    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
  </div>
  <div className='box mt-3'>
    <h5>Do better with money</h5>
    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money..</p>
  </div>
 </div>
    </div>
    <div className='col-6'  style={{
    marginTop:"5rem"
  }}>
<div className='img1'>
<img src={eco} alt="ecosystemimg" style={{
  height:"25rem",
  width:"100%"
}}/>
</div>
<div className='links' style={{
  display:"flex", flexDirection:"row", justifyContent:"center", gap:"1rem", fontSize:"1rem"
}}>
<div className='link ' style={{
  fontSize:"1.1rem"
}}><a href="">Explore our products <i className="fa-solid fa-arrow-right"></i></a></div>
<div className='link'  style={{
  fontSize:"1.1rem"
}} ><a href="">Try kite demo    <i className="fa-solid fa-arrow-right ml-2"></i></a></div>
</div>
    </div>
   </div>
   <div className='presslogo text-center' style={{
    marginTop:"3rem"
   
  }}>
    <img src={presslogo} alt="logo" />
   </div>

    </div>
    </>
   );
}

export default Trust;