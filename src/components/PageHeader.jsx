import React from 'react';
import PropTypes from 'prop-types';
import backIcon from '../assets/icons/arrow-left.svg';
import '../styles/page-header.scss';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  back() {
    const { history, goBackAction } = this.props;
    if (goBackAction) {
      goBackAction();
    } else {
      history.goBack();
    }
  }

  render() {
    const {
      title,
      backButton,
      action,
      actionIcon,
      actionAltText,
    } = this.props;
    return (
      <div className="page-header">
        {backButton && (
        <button
          className="back-button"
          type="button"
          onClick={this.back}
        >
          <img src={backIcon} alt="Go back" />
        </button>
        )}
        <h1>{title}</h1>
        {action && (
        <button
          className="action-button"
          type="button"
          onClick={action}
        >
          <img src={actionIcon} alt={actionAltText} />
        </button>
        )}
      </div>
    );
  }
}
PageHeader.defaultProps = {
  backButton: false,
  action: undefined,
  actionIcon: undefined,
  actionAltText: undefined,
  history: undefined,
  goBackAction: undefined,
};

PageHeader.propTypes = {
  backButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
  actionIcon: PropTypes.string,
  actionAltText: PropTypes.string,
  history: PropTypes.shape({}),
  goBackAction: PropTypes.func,
};

export default PageHeader;
