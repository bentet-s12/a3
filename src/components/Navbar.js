import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useLogin } from '../components/isLoggedInContext'; // Import the custom hook

const Navbar = ({ menuOpen, toggleMenu }) => {
  const { isLoggedIn, logOut } = useLogin(); // Access login state from the context

  return (
    <nav className="navbar clearfix">
      {/* Hamburger menu that toggles the menu */}
      <div className="hamburger_menu" onClick={toggleMenu}></div>
      
      <Link to="/" className="logo clogo"></Link>

      {/* Conditionally show or hide the menu items */}
      <ul className='mobilehide'>
        {!isLoggedIn && <Link to="/login" className='userlogo logo'></Link>}
        {isLoggedIn && (
            <li>
              <Link to="/CurrentAdoptions" className='userlogo logo'></Link>
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
