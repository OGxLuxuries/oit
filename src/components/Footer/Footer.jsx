import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo-container">
          
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-text">
          <p>&copy; 2024 OIT. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
