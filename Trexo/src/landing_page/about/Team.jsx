import React from 'react'
import Vinay from "../../assets/Vinay.jpg"
function Team() {
  return ( 
    <>
   <div className='founder'>
  <h3 className='found' style={{
    textAlign:"center",
    marginTop:"5rem"
  }}>Founder</h3>
  <div className="container" style={{
   }}>
      <div className="row" style={{width:"60%",margin:"auto"}}>
        <div className="col-6" style={{
          
          marginTop:"3rem"
        }}>
            <img src={Vinay} alt="img" style={{
        height:"100px",
        width:"100px",
        border:"1px solid grey",
        borderRadius:"100%",
        marginLeft:"7rem"
       
      }}/>
      <h4 className='mt-3' style={{marginLeft:"7rem"}}>Vinay K Kumbhar</h4>
      <p className='mt-2'  style={{marginLeft:"7rem"}}>Founder CEO</p>
        </div>
        <div className="col-6 mt-5 " style={{fontFamily:"sans-serif"}}>
          <p ><b>Vinay Kumbhar</b> is a passionate individual driven by the desire to break barriers and create meaningful impact. With a deep commitment to learning, discipline, and innovation, he is actively building a future where technology, leadership, and service intersect.</p>
          <p>He has led initiatives through platforms like NSS and Rotary Club, and is currently focused on growing multiple digital brands while pursuing excellence in software development and defense services.</p><p>Playing football and the tabla is his zen.</p><p>Connect on Homepage / GitHub / LinkedIn / Instagram</p>
        </div>
      </div>
    

  </div>
</div></>
   );
}

export default Team;