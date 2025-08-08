
import homeHero from "../../assets/homeHero.png";
import { Link } from "react-router-dom";
import SignUpPage from "../signup/signUpPage";

function Hero() {
  return ( 
    <>
  <div className='container text-center mb-5'>
    <div className='row'>
      <img src={homeHero}  style={{ height: '500px' }} alt="Hero" />
      <h1 className="mt-5">Invest In Everything</h1>
      <p style={{fontSize:"1.5rem", marginTop:"0.7rem"}}>Online Platform to Invest In Stocks,Derivatives,Mutual funds,ETFs,Bonds and more</p>
     
     <Link to="/signnup">
     <button type="button" className="btn btn-primary btn-lg " style={{
      width:"20%", 
      margin:"auto"
     }}>Sign Up for free</button>
     </Link>
    </div>
  </div>
    </>
   );
}


export default Hero;