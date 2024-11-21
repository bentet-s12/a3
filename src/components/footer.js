import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='ftcontainer'>
        <div className='logos'>
          <div className='logo img clogo'></div>
        </div>
        <div className='separator'></div>
        
        <ul>
          <h4>Directory</h4> {/* Replaced label with h4 */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Cats">Adoption</Link></li>
          <li><Link to="/release">Release</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
        
        <div className='separator'></div>
        
        <div className='logos'>
          <h4>Address</h4>
          <p>b1-1m Undah rd,</p>
          <p>a watah, #b1-1235</p>
         <p>singapore 123531</p>
        </div>
        
        <div className='logos'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15954.758037158157!2d103.81635112791217!3d1.3629563167157048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1732175664305!5m2!1sen!2ssg"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
