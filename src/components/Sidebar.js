import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useLogin } from '../components/isLoggedInContext'; // Import the custom hook

const Sidebar = ({ onLogout, menuOpen, toggleMenu }) => {
  const { isLoggedIn, logOut } = useLogin(); // Access login state from the context

  return (
    <nav className={`Sidebar stick ${menuOpen ? 'open' : 'hide'}`}>
      <div className="sidebar">
        <div className="hamburger_menu_close" onClick={toggleMenu}></div>
        <ul className="side_menu">
          <li><Link to="/">Home</Link></li>
          {isLoggedIn && (
            <li><Link to="/currentadoptions">Currrent Adoptions</Link></li>
          )}
          <li><Link to="/Cats">Adoptions</Link></li>
          <li><Link to="/release">Release</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
          {isLoggedIn && (
            <li>
              <Link to="/" onClick={logOut}>Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
