import React, { PropTypes } from 'react';
import 'react-select/dist/react-select.css';
import ReactSVG from 'react-svg';
import FilterLogo from 'static/svgs/filter_icon.svg';
import './style.scss';

export default class SectionTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFilters: false,
    };

    this.toggleFilters = this.toggleFilters.bind(this);
  }

  toggleFilters() {
    this.setState({
      showFilters: !this.state.showFilters,
    });
  }

  render() {
    return (
      <div className="section-title">
        <div className="wrapper">
          <div className="title-container">
            <div className="title">
              {`${this.props.title} (${this.props.count})`}
              <div className="title-border" />
            </div>

            <div className="section-filters">
              {this.props.filter}
            </div>

            {this.props.filter !== undefined
              ? (
                <button className="filter-icon" onClick={this.toggleFilters}>
                  <ReactSVG path={FilterLogo} />
                </button>
              )
              : null
            }
          </div>

          {this.props.filter !== undefined && this.state.showFilters
            ? (
              <div className="filter-collapse">
                {this.props.filter}
              </div>
            )
            : null
          }
        </div>
      </div>
    );
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  filter: PropTypes.element,
};
