import React from 'react';
import ReactSVG from 'react-svg';
import CheppersLogo from 'static/svgs/cheppers_logo.svg';
import './style.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <a href="https://cheppers.com" target="_blank" rel="noopener noreferrer">
            <ReactSVG path={CheppersLogo} />
          </a>
          <div className="header-title">development & design company</div>
        </div>
      </div>
    );
  }
}
