
import pricingO from "../../assets/pricing.svg";
import intradayTrades from "../../assets/intradayTrades.svg"
 function Pricing() {
  return ( 
    <>
   <div className='container mt-5'>
    <div className='row'>
      <div className='col-6' style={{
    marginTop:"5rem",
   
  }}>
        <div className='heading' style={{
    marginLeft:"8rem"
   
  }}><h3>Unbeatable pricing</h3></div>
        <div className='content mt-5' style={{
    marginLeft:"8rem"
   
  }}>
          <div className='para'><p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p></div>
          <div className='link'><a href="">See pricing <i className="fa-solid fa-arrow-right ml-2"></i></a></div>
        </div>
      </div>
      <div className='col-6 mt-5'  style={{
    marginTop:"5rem"
  }}>
   <div className='content d-flex justify-content-center align-items-center' >
<div className='logo1 d-flex '>
  <div className='img1'>
    <img src={pricingO} alt="" />
  </div>
  <div className='para'>
    Free account opening
  </div>
</div>
<div className='logo2 d-flex justify-content-center align-items-center'>
    <div className='img1'>
      <img src={pricingO} alt="" />
    </div>
  <div className='para'>Free equity delievry and direct mutual funds</div>
</div>
<div className='logo3 d-flex justify-content-center align-items-center'>
    <div className='img1'>
      <img src={intradayTrades} alt="" />
    </div>
  <div className='para'>Intraday and F&Q</div>
</div>
   </div>
      </div>
    </div>
   </div>
    </>
   );
}

export default Pricing;