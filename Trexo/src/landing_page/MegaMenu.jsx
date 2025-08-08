import React from 'react';
import { Link } from 'react-router-dom';
import './MegaMenu.css';
import ed from "../assets/kite-logo.svg"
function MegaMenu() {


  return (
    <nav className="mega-nav">
      <ul className="mega-nav__main">
              <li className="mega-nav__item">
 <Link to="/dash">
 <button
  style={{ border: "none", backgroundColor: "white" }}
 
>
  <img src={ed} alt="Kite" />
  Kite
</button>
</Link>
<button onClick={() => window.location.href = "http://localhost:3000/"}>
  Go to Dashboard
</button>

          </li>
        {/* <li className="mega-nav__item">
          <Link to="/console"><img src="/icons/console.svg" alt="Console" /></Link>
        </li>
        <li className="mega-nav__item">
          <Link to="/kite-connect"><img src="/icons/connect.svg" alt="Kite Connect" /></Link>
        </li> */}
        {/* add more top items */}
        <li className="mega-nav__item mega-nav__item--dropdown" >
          <span>More</span>
          <div className="mega-menu">
            <div className="menu-column">
              <h4>Utilities</h4>
              <ul>
                <li><Link to="/calculators">Calculators</Link></li>
                <li><Link to="/brokerage-calculator">Brokerage calculator</Link></li>
                <li><Link to="/margin-calculator">Margin calculator</Link></li>
                <li><Link to="/sip-calculator">SIP calculator</Link></li>
              </ul>
            </div>
            <div className="menu-column">
              <h4>Updates</h4>
              <ul>
                <li><Link to="/z-connect">Z‑Connect blog</Link></li>
                <li><Link to="/circulars">Circulars / Bulletin</Link></li>
                <li><Link to="/ipos">IPOs</Link></li>
                <li><Link to="/markets">Markets</Link></li>
              </ul>
            </div>
            <div className="menu-column">
              <h4>Education</h4>
              <ul>
                <li><Link to="/varsity">Varsity</Link></li>
                <li><Link to="/trading-qa">Trading Q&A</Link></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default MegaMenu;
