/* eslint max-len: ["error", 180] */

import React from 'react';
import ReactSVG from 'react-svg';
import ConturLogo from 'static/svgs/contur_logo_figure.svg';
import ConturText from 'static/svgs/contur_typo.svg';
import GithubIcon from 'static/svgs/Github_icon.svg';
import './style.scss';

export default class Contur extends React.Component {
  render() {
    return (
      <div className="contur-section">
        <div className="wrapper">
          <div className="contur-box">
            <div className="contur-container">
              <div className="contur-logo-container">
                <ReactSVG path={ConturLogo} className="contur-logo-figure" />
                <ReactSVG path={ConturText} className="contur-logo-text" />
              </div>
              <div className="text">
                Contur is an open-source command line application simplifying your local web development environment.
                It hosts your site using Docker containers so you don&apos;t have to install Apache, MySQL, PHP and PHP extensions on your own machine.
                Contur is written in Ruby and uses the Docker HTTP API.
              </div>
            </div>

            <div className="github-container">
              <div className="contributors">
                <a
                  href="https://github.com/ghaabor"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contributor"
                >
                  <ReactSVG path={GithubIcon} />
                  <div className="contributor-name">ghaabor</div>
                </a>
                <a
                  href="https://github.com/Yitsushi"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contributor"
                >
                  <ReactSVG path={GithubIcon} />
                  <div className="contributor-name">Yitsushi</div>
                </a>
              </div>

              <div className="contur-github">
                <a
                  href="https://github.com/Cheppers/contur"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contur-github-link"
                >
                  view on github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
