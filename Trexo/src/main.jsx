import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './landing_page/home/homepage';
import AboutPage from './landing_page/about/AboutPage';
import SignUpPage from './landing_page/signup/signUpPage';
import PricingPage from './landing_page/pricing/Pricingpage.jsx';
import SupportPage from './landing_page/support/Supportpage.jsx';
import Notfound from './landing_page/Notfound.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import ProductPage from './landing_page/products/Productpage.jsx';

import Signupp from './landing_page/Signupp.jsx';
import Hero from './landing_page/home/Hero.jsx';
import Signup from './landing_page/signup/signup.jsx';
import MegaMenu from './landing_page/MegaMenu.jsx';
import GoToDashboard from './landing_page/GoToDashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/about' element={<AboutPage />} />
          <Route path='/pricing' element={<PricingPage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/signupp' element={<Signupp />} />
            <Route path='/hero' element={<Hero />} />
               <Route path='/signnup' element={<Signup />} />
                 <Route path='/megamenu' element={<MegaMenu />} />
                 <Route path='/dash' element={<GoToDashboard />} />
                
            <Route path='*' element={<Notfound />} />


             
    </Routes>
    <Footer/>
  </BrowserRouter>
);
