import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Forms';

const Home = () => {
  const navigate = useNavigate(); // Added to use navigate for redirection

  return (
    <div className="heropages clearfix">
      <div className="heropage">
        <div className='textbox'>
        <h1>Welcome to Pet Haven</h1>
        <br></br>
        <h3>Let's make some animals happy</h3>
        </div>
      </div>
      <div className="homenav clearfix"> 
        <div className="cardsection">
          <div className="cards">
          <a href='#stats' className='item'>
            <div className="item" >
              <h3>Statistics</h3>
            </div>
            </a>
            <div className="separator"></div>
            <a href='#help'  className='item'>
            <div className="item">
              <h3>Help Us</h3>
            </div>
            </a>
            <div className="separator"></div>
            <a href='#adopt'  className='item'>
            <div className="item">
              <h3>Adoption Options</h3>
            </div>
            </a>
            <div className="separator"></div>
            <a href='#contactus'  className='item'>
            <div className="item">
              <h3>Contact Us</h3>
            </div>
            </a>
          </div>
        </div>
      </div>
      <div className="cardsection stat clearfix" id='stats'>
        <div className="flex-column">
          <h1>Friends That We ...</h1>
          <div className="cards">
            <div className="item">
              <div className="beegtext">
                <h2>10,000</h2>
              </div>
              <div className="content">
                <b>Rescued</b>
              </div>
            </div>
            <div className="separator"></div>
            <div className="item">
              <div className="beegtext">
                <h2>100,000</h2>
              </div>
              <div className="content">
                <b>Abandoned</b>
              </div>
            </div>
            <div className="separator"></div>
            <div className="item">
              <div className="beegtext">
                <h2>1,000</h2>
              </div>
              <div className="content">
                <b>Housed</b>
              </div>
            </div>
          </div>
          <h3>AND COUNTING TO THE MANY MORE WE CAN PROVIDE FOR</h3>
        </div>
      </div>
      <div className="cardsection trust clearfix" id="help">
        <div className="flex-column">
          <h1>Save Them Together With Us</h1>
          <div className="cards">
            <div className="item">
              <div className="logo lg1"></div>
              <div className="content">
                <b>Volunteering</b><br />
                We are open for people of all ages to have some fun with our animals and bring joy.
              </div>
            </div>
            <div className="item">
              <div className="logo lg2"></div>
              <div className="content">
                <b>Donations</b><br />
                We are open for donations of any kind that can help support our operations.
              </div>
            </div>
            <div className="item">
              <div className="logo lg3"></div>
              <div className="content">
                <b>Adopt</b><br />
                The best kind of help is to directly give our dear friends a home.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_adopt clearfix" id="adopt">
        <div className="adoptsection">
          <div className="adopt_image img" onClick={() => navigate('/cats')}>
            <div className="text1">
              <h3>ADOPT</h3>
            </div>
          </div>
        </div>
        <div className="adoptsection">
          <div className="release_image img" onClick={() => navigate('/release')}>
            <div className="text1">
              <h3>RELEASE</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="contactsection clearfix" id ="contactus">
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
