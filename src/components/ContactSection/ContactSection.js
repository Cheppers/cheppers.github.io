import React from 'react';
import './style.scss';

export default class ContactSection extends React.Component {
  render() {
    return (
      <div className="contact-section">
        <div className="wrapper">
          <div className="contact-box left">
            <div className="title">do you have a challenge for us?</div>
            <a
              href="https://cheppers.com/contact-us"
              rel="noopener noreferrer"
              target="_blank"
              className="contact-button"
            >
              get in touch
            </a>
          </div>
          <div className="contact-box">
            <div className="title">do you like our works?</div>
            <a
              href="https://cheppers.com/careers"
              rel="noopener noreferrer"
              target="_blank"
              className="contact-button"
            >
              work with us
            </a>
          </div>
        </div>
      </div>
    );
  }
}
