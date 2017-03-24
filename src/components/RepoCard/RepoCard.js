import React, { PropTypes } from 'react';
import './style.scss';

export default class RepoCard extends React.Component {
  constructor(props) {
    super(props);

    this.cutDescription = this.cutDescription.bind(this);
  }

  cutDescription(text) {
    if (text === null) {
      return '';
    }

    if (text.length > 100 || '') {
      return `${text.substring(0, 120)}...`;
    }

    return text;
  }

  render() {
    return (
      <div className="repo-card">
        <a
          href={this.props.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-name"
          label={this.props.name}
        >
          {this.props.name}
        </a>
        <div className="name-border" />
        <div className="repo-language">{this.props.language || ''}</div>
        <div className="repo-description">{this.cutDescription(this.props.description)}</div>
      </div>
    );
  }
}

RepoCard.propTypes = {
  html_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string,
};

RepoCard.defaultProps = {
  language: '',
  description: '',
};
