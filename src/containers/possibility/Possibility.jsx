import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
        <div className="gpt3__possibility-content">
          <h4>Request early access to get started</h4>
          <h1 className="gradient__text">The Possibilities Are Beyond Your Imagination</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h4>Don't wait - join now</h4>
        </div>
      </div>
    </div>
  )
}

export default Possibility