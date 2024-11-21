import React from 'react';

const AboutUs = () => {
 return (
 <div>
    <div className='form-container alt'>
            <div className='alt_page_images img'>
                <h1>About Us</h1>
            </div>
 </div>
 <div className="cardsection team clearfix">
        <div className="flex-column">
        <h1>Meet The <b>TEAM</b></h1>
            <div className='flex-row'>
                <div className='teamimage'>
                    <div className='img founder'></div>
                </div>
                <div className='storytime'>
                    <h3>our <b>FOUNDER</b></h3><br></br>
                    <p>i know i been selfish, hanging by a thread uh. thats how i live, living in agony. feel about how to pick me up from this hole i trapped myself in</p>
                </div>
                </div>
                <div className='flex-rerow'>
                <div className='teamimage'>
                    <div className='img teamimg'></div>
                </div>
                <div className='storytime'>
                    <h3>our <b>TEAM</b></h3><br></br>
                    <p>so poor but im so wealthy tell me lies but im so healthy. so misunderstoood , i wish i could heeelp . but its hard cos i hate myself what is success </p>
                </div>
                </div>
            </div>
    </div>
    
 <div className="cardsection causes clearfix">
        <div className="flex-column">
          <h1>Our Causes</h1>
          <div className="cards">
            <div className="item cause">
              <div className="logo cause1"></div>
              <div className="content">
                <b>Volunteering</b><br></br>
                we are open for people of all ages to have some fun with our animals to bring some joy
              </div>
            </div>
            <div className="item cause">
              <div className="logo cause2"></div>
              <div className="content">
                <b>food donations</b><br></br>
                We are open for donations of any kind that can help support our operations. and keep our furry friends well fed
              </div>
            </div>
            <div className="item cause">
              <div className="logo cause3"></div>
              <div className="content">
                <b>Healthy Animals</b><br></br>
                We support most animals brought in with a health checkup and vaccine shots to ensure their wellbeing 
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
 );
};
export default AboutUs;
