import React from 'react'
import gpay from "../../assets/googlePlayBadge.svg"
import app from "../../assets/appstoreBadge.svg"
function LeftSection({
  imageurl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePay,
  appStore

}) {
  return (  
    <>
   <div className="container mt-5">
    <div className="row">
      <div className="col-5  mt-5">
        <img src={imageurl} alt="img" style={{
          height:"450px",
          marginLeft:"8rem"
        }}/>
      </div>
      <div className="col-5 " style={{marginTop:"5rem", marginLeft:"13.5rem"}}>
        <h3>{productName}</h3>
        <p className='mt-4'>{productDescription}</p>
        <div className="links2 mt-3">
          <a href="">{tryDemo} <i className="fa-solid fa-arrow-right"></i></a>
          <a href="" style={{marginLeft:"1rem"}}>{learnMore} <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="links1 mt-4">
          <a href=""><img src={googlePay} alt="img" /> </a>
          <a href=""><img src={appStore} alt="img" /> </a>
        </div>
      </div>
    </div>
   </div>
    </>
  );

<>
<h1>Leftsection</h1></>}

export default LeftSection;