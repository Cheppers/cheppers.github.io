import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import FontAwesome from 'react-fontawesome';
import * as actionCreators from 'actions/actions';
import Header from 'components/Header/Header';
import ContactSection from 'components/ContactSection/ContactSection';
import Contur from 'components/Contur/Contur';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import CompanyRepos from 'components/CompanyRepos/CompanyRepos';
import MemberRepos from 'components/MemberRepos/MemberRepos';
import FollowUs from 'components/FollowUs/FollowUs';
import Footer from 'components/Footer/Footer';
import './Font.css';
import './style.scss';

function mapStateToProps(state) {
  return {
    repos: state.repos,
    members: state.members,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

@connect(store => ({
  dispatch: store.dispatch,
}))


export class AppLayout extends React.Component {
  constructor() {
    super();

    this.arrowRenderer = this.arrowRenderer.bind(this);
    this.selectMember = this.selectMember.bind(this);
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  arrowRenderer() {
    return (
      <span><FontAwesome name="angle-down" /></span>
    );
  }

  selectMember(value) {
    this.props.dispatch(actionCreators.filterMember(value));
  }

  selectLanguage(value) {
    this.props.dispatch(actionCreators.filterLang(value));
  }

  render() {
    return (
      <div>
        <Header />
        <ContactSection />
        <Contur />
        <SectionTitle title="company repos" count={this.props.repos.length} />
        <CompanyRepos {...this.props} />
        <SectionTitle
          title="team repos"
          count={this.props.members.repoCount}
          filter={
            <div className="section-filters">
              <Select
                simpleValue
                clearable={true} //eslint-disable-line
                value={this.props.members.memberFilter}
                placeholder={`MEMBERS (${this.props.members.membersList.length})`}
                options={this.props.members.membersList}
                arrowRenderer={this.arrowRenderer}
                onChange={this.selectMember}
              />
              <Select
                simpleValue
                clearable={true} //eslint-disable-line
                value={this.props.members.languageFilter}
                placeholder="ALL LANG"
                options={this.props.members.languageList}
                arrowRenderer={this.arrowRenderer}
                onChange={this.selectLanguage}
              />
            </div>
          }
        />
        <MemberRepos {...this.props} />
        <FollowUs />
        <Footer />
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppLayout);

export default App;

AppLayout.propTypes = {
  dispatch: PropTypes.func,
  repos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  members: PropTypes.shape().isRequired,
};
