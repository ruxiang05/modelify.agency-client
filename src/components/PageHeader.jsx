import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BackIcon } from '../assets/icons/arrow-left.svg';
import '../styles/page-header.scss';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  back() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { title, backButton } = this.props;
    return (
      <div className="page-header">
        {backButton ? (
          <button
            className="back-button"
            type="button"
            onClick={this.back}
          >
            <BackIcon />
          </button>
        ) : null}
        <h1>{title}</h1>
      </div>
    );
  }
}
PageHeader.defaultProps = {
  backButton: false,
};

PageHeader.propTypes = {
  backButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default PageHeader;
