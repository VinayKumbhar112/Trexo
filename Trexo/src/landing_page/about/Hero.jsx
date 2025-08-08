import React from 'react'

function Hero() {
  return ( <>
 <h3 className=' text-center' style={{
  marginTop:"5rem"
 }}>We pioneered the discount broking model in India.</h3>
<h3 className=' text-center'>Now, we are breaking ground with our technology.</h3>
<hr className='mt-5' style={{
  width:"70%",
margin:"auto"
}}/>
<div className="container mt-5">
  <div className="row " style={{width:"70%", margin:"auto"}} >
    <div className="col-6 " style={{fontFamily:"sans-serif"}}>
      <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
      <p className='mt-3'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
      <p className='mt-3'>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
    </div>
    <div className="col-6 " >
      <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
      <p className='mt-3'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
      <p className='mt-3'>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
    </div>
  </div>
</div>

  </> );
}

export default Hero;