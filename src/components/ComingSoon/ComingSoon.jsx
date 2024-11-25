import React from 'react';
import './ComingSoon.css';

const ComingSoonPage = () => {
  return (
    <div className='full-screen-width'>
            <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>Coming Soon</h1>
        <p>We are working hard to bring something amazing. Stay tuned!</p>
        <div className="email-signup">
          <p>Sign up for updates:</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="email-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>

    </div>
    
  );
}

export default ComingSoonPage;
