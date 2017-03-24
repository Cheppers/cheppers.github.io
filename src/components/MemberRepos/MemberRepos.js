import React, { PropTypes } from 'react';
import _ from 'lodash';
import ReactSVG from 'react-svg';
import RepoCard from 'components/RepoCard/RepoCard';
import CheppersDividerIcon from 'static/svgs/cheppers_divider_icon.svg';
import GithubIcon from 'static/svgs/Github_icon.svg';
import './style.scss';

export default class MemberRepos extends React.Component {
  constructor(props) {
    super(props);

    this.renderRepos = this.renderRepos.bind(this);
  }

  componentDidMount() {
    this.props.getMembers();
  }

  renderRepos(member) {
    if (_.isEmpty(member.repos)) {
      return null;
    }

    const cards = [];
    const languageFilter = this.props.members.languageFilter;

    member.repos.forEach((repo) => {
      if (languageFilter === null || repo.language === languageFilter) {
        cards.push(
          <RepoCard
            key={repo.id}
            name={repo.name}
            language={repo.language}
            description={repo.description}
            html_url={repo.html_url}
          />,
        );
      }
    });

    if (cards.length === 0) {
      return null;
    }

    cards.push(
      <div className="filling-card" key="0" />,
    );

    return (
      <div className="member-container" key={member.login}>
        <div className="member-card">
          <div className="member-avatar" style={{ backgroundImage: `url('${member.avatar_url}')` }} />
          <div className="member-name-container">
            <div className="member-name">{member.name || member.login}</div>
            <a
              href={`https://github.com/${member.login}`}
              rel="noopener noreferrer"
              target="_blank"
              className="member-login"
            >
              <ReactSVG path={GithubIcon} className="member-login-icon" />
              {member.login}
            </a>
          </div>
        </div>
        {cards}
        <div className="member-repos-divider">
          <div className="divider-line" />
          <ReactSVG path={CheppersDividerIcon} className="divider-icon" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="member-repos">
        {this.props.members.memberFilter === null
          ? this.props.members.memberRepos.map(member => this.renderRepos(member))
          : this.renderRepos(_.find(this.props.members.memberRepos, {
            login: this.props.members.memberFilter,
          }))
        }
      </div>
    );
  }
}

MemberRepos.propTypes = {
  getMembers: PropTypes.func.isRequired,
  members: PropTypes.shape().isRequired,
};
