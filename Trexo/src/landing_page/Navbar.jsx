import "./Navbar.css"
import { useState ,useRef,useEffect} from "react";
import trexoLogo from '../assets/trexoimg.png'
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(prev => !prev);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (  
    <>
  <nav className="navbar navbar-expand-lg navbar-expand-sm bg-body-tertiary sticky-top">
  <div className="container mx-auto p-2 d-flex">
    <div className=' navbox p-2 flex-grow-1  collapse navbar-collapse'>
  <a href="/"><img src={trexoLogo} alt="trexo"/></a>
   
   

    </div>
    <div className=" collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/product">Products</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active" to="/support">Support</Link>
        </li>
          <li className="nav-item">
            
         {/* <Link className="nav-link active" to="/megamenu"> */}
         <button  ref={menuRef} onClick={toggleMenu} className="menu-button" style={{
          marginTop:"8px",
          border:"none",
          marginLeft:"3px"
         }}>
         <i className="fa-solid fa-bars" ></i>
         </button>
         {isOpen && <MegaMenu/>}
         {/* </Link> */}
      
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;