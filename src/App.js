import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cats from './pages/Cats';
import Pay from './pages/payment';
import { AdoptProvider } from './pages/adoptcontext';
import { LoginProvider } from './components/isLoggedInContext';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/footer';
import Release from './pages/release';
import Dogs from './pages/Dogs';
import CurrentAdoptions from './pages/currentadoptions';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <LoginProvider>
      <AdoptProvider>
        <Router>
          {/* Now, Navbar and Sidebar have access to the LoginContext */}
          <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
          
          <div className="maincontainer clearfix">
            <div className="container clearfix">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cats" element={<Cats />} />
                <Route path="/services" element={<Services />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/payment" element={<Pay />} />
                <Route path="/release" element={<Release />} />
                <Route path="/Dogs" element={<Dogs />} />
                <Route path="/CurrentAdoptions" element={<CurrentAdoptions />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </AdoptProvider>
    </LoginProvider>
  );
};

export default App;
