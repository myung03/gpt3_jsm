import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Be the first to step into the future. </h1>
      </div>

      <div className="gpt3__footer-btn">
        <button>Request Early Access</button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3 logo" />
          <p>34090 Crescent View, OpenAi Canada, V1P 9M0</p>
        </div>
      <div className="gpt3__footer-links-div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Support</p>
      </div>
      <div className="gpt3__footer-links-div">
        <h4>Get in Touch</h4>
        <p>34090 Crescent View, OpenAi Canada, V1P 9M0</p>
        <p>085-132567 Media</p>
        <p>info@payme.net</p>
      </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>&copy; GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer