import React, { PropTypes } from 'react';
import RepoCard from 'components/RepoCard/RepoCard';
import './style.scss';

export default class CompanyRepos extends React.Component {
  constructor(props) {
    super(props);

    this.renderRepos = this.renderRepos.bind(this);
  }

  componentDidMount() {
    this.props.getRepos();
  }

  renderRepos() {
    const repos = [];
    this.props.repos.forEach((repo) => {
      repos.push(
        <RepoCard
          key={repo.id}
          name={repo.name}
          language={repo.language}
          description={repo.description}
          html_url={repo.html_url}
        />,
      );
    });

    repos.push(
      <div className="filling-card" key="0" />,
    );

    return repos;
  }

  render() {
    return (
      <div className="company-repos">
        {this.renderRepos()}
      </div>
    );
  }
}

CompanyRepos.propTypes = {
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
