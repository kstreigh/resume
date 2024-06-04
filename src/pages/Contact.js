// linkedin, email, phone, github
import React from 'react';
import Home from './Home';
import './pages.css'
import SocialFollow from '../SocialFollow';
const Contact = () => {
  return (
    <div className='container'>
      <div className='left-half'>
        <Home />
      </div>
      <div className='right-half'>
        <div className='tab'>
        <h1>Contact</h1>
        <h3>You can reach out to me via social media. </h3><br/>
        <SocialFollow/>
        <h3> Alternatively, here is my email and phone number. </h3>
          Email: kellystreight02@gmail.com <br/>
          Phone: +1-812-953-0118
        </div>
      </div>
    </div>
  );
};

export default Contact;
