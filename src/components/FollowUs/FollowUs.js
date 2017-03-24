import React from 'react';
import ReactSVG from 'react-svg';
import FacebookLogo from 'static/svgs/Facebook.svg';
import LinkedLogo from 'static/svgs/LinkedIN.svg';
import TwitterLogo from 'static/svgs/Twitter.svg';
import './style.scss';

export default class FollowUs extends React.Component {
  render() {
    return (
      <div className="follow-us">
        <div className="wrapper">
          <div className="title">Follow us</div>
          <div className="social-container">
            <a
              href="https://www.facebook.com/cheppers.hu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG path={FacebookLogo} className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/cheppers"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG path={LinkedLogo} className="social-icon" />
            </a>
            <a
              href="https://twitter.com/cheppers"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ReactSVG path={TwitterLogo} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
