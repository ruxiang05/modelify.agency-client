import React from 'react';
import PropTypes from 'prop-types';
import ModelsList from './ModelList';
import PageHeader from './PageHeader';
import addModelIcon from '../assets/icons/user-plus.svg';

class Models extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToAddModel = this.redirectToAddModel.bind(this);
  }

  redirectToAddModel() {
    const { history } = this.props;
    history.push('/add-model');
  }

  render() {
    return (
      <React.Fragment>
        <PageHeader
          title="Models"
          actionIcon={addModelIcon}
          action={this.redirectToAddModel}
        />
        <div className="page">
          <ModelsList />
        </div>
      </React.Fragment>
    );
  }
}

Models.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Models;
