/* eslint max-len: ["error", 150] */

import React from 'react';
import './style.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="wrapper">
          <div className="footer-conatiner">
            <div className="link-conatiner">
              <a href="https://cheppers.com/contact-us" className="footer-link" target="_blank" rel="noopener noreferrer">Contact</a>
              <a href="https://cheppers.com/blog" className="footer-link" target="_blank" rel="noopener noreferrer">Blog</a>
              <a href="https://cheppers.com/work" className="footer-link" target="_blank" rel="noopener noreferrer">Our Works</a>
              <a href="https://cheppers.com/careers" className="footer-link" target="_blank" rel="noopener noreferrer">Career</a>
            </div>

            <div className="about">
              <p>
                This open sourced site is hosted on GitHub. Patches, suggestions and comments are welcome.
              </p>
              <p>
                Built with love... and React, GitHub Pages, and API.
              </p>
            </div>
          </div>

          <div className="terms">
            {/*
            <a href="/" className="terms-link" target="_blank" rel="noopener noreferrer">Privacy & cookies</a>
            <a href="/" className="terms-link" target="_blank" rel="noopener noreferrer">Terms of use</a>
            */}
            <div className="copyright">
              {`© ${new Date().getFullYear()} Cheppers`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
