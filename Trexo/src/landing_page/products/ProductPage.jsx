import React from 'react'

import Leftsection from './LeftSection';
import Rightsection from './RightSection';
import Universe from './Universe';
import Kite from "../../assets/Kite.png"
import gpay from "../../assets/googlePlayBadge.svg"
import app from "../../assets/appstoreBadge.svg"
import console from "../../assets/console.png"
import coin from "../../assets/coin.png"
import Kiteconnect from "../../assets/kiteconnect.png"
function ProductPage() {
  return (  
    <>

    <Universe/>
     
    <Leftsection     imageurl={Kite}
  productName="Kite"
  productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  tryDemo="Try demo"
  learnMore="Learn more"
  googlePay={gpay}
  appStore={app} />
    <Rightsection    imageurl={console}
  productName="Console"
  productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  learnMore="Learn more"
    />
     
    <Leftsection     imageurl={coin}
  productName="Coin"
  productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  tryDemo="Coin"
  learnMore="Learn more"
  googlePay={gpay}
  appStore={app} />
  <Rightsection    imageurl={Kiteconnect}
  productName="Kite connect API"
  productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  learnMore="Kite connect API"
    />
<div className="container mt-5 text-center">
  <p style={{fontFamily:"sans-serif" ,fontSize:"20px"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
</div>
    </>
  );
}

export default ProductPage
