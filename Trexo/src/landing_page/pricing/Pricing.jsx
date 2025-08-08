import React from 'react'
import pricingO from "../../assets/pricingMF.svg";
import pricingO1 from "../../assets/intradayTrades.svg";
function Pricing() {
  return (
    <>
    <div className="container">
      <h3 className='text-center mt-5'>Charges</h3>
      <p className='text-center mt-4' style={{color:"gray",fontFamily:"sans-serif"}}>List of all charges and taxes</p>
    </div>
    <div className="container">
      <div className="row" style={{width:"100%", margin:"auto"}}>
        <div className="col-4"  >
          <img src={pricingO} alt="img" style={{height:"150px",marginLeft:"10rem"}}/>
          <h3 className='mt-3' style={{marginLeft:"8rem"}}>Free equity delivery</h3>
          <p className='mt-3' style={{fontFamily:"sans-serif",marginLeft:"8rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
           <div className="col-4 " >
              <img src={pricingO1} alt="img" style={{height:"150px" ,marginLeft:"7rem"}} />
          <h3 className='mt-3' style={{marginLeft:"3rem"}}>Intraday and F&O trades</h3>
          <p className='mt-3' style={{fontFamily:"sans-serif" ,marginLeft:"2rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
           </div>
              <div className="col-4" >
                  <img src={pricingO} alt="img" style={{height:"150px",marginLeft:"2rem"}}/>
          <h3 className='mt-3'style={{marginLeft:"4rem"}}>Free direct MF</h3>
          <p className='mt-3' style={{fontFamily:"sans-serif",marginLeft:"4rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
              </div>
      </div>
    </div>
    </>
    );
}

export default Pricing;