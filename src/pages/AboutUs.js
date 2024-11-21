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
                    <p>Mr undah is the passionate founder of Pet Haven, a shelter dedicated to rescuing and rehoming abandoned and neglected animals. With a lifelong love for animals and a deep sense of empathy for those without a voice, they established Pet Haven to provide a safe, caring environment for pets in need. What began as a personal mission to make a difference in the lives of stray animals has since grown into a trusted sanctuary, offering not only shelter but also medical care, rehabilitation, and adoption services, ensuring that every animal finds a loving forever home.</p>
                </div>
                </div>
                <div className='flex-rerow'>
                <div className='teamimage'>
                    <div className='img teamimg'></div>
                </div>
                <div className='storytime'>
                    <h3>our <b>TEAM</b></h3><br></br>
                    <p>The dedicated team at Pet Haven is a group of passionate and compassionate individuals who share a deep commitment to animal welfare. Led by mr Undah, each team member brings unique skills and expertise, from animal care and medical treatment to volunteer coordination and outreach. With a shared vision of creating a better future for homeless pets, the team works tirelessly to ensure every animal receives the love, attention, and care they deserve. Their collective efforts and unwavering dedication make Pet Haven not just a shelter, but a true community where every pet has a chance at a better life. </p>
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
