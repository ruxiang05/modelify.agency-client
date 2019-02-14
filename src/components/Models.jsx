import React from 'react';
import PropTypes from 'prop-types';
import ModelsList from './ModelList';
import PageHeader from './PageHeader';

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
      <div className="page">
        <PageHeader title="Models" />
        <button type="button" onClick={this.redirectToAddModel}>
                    Add model
        </button>
        <ModelsList />
      </div>
    );
  }
}

Models.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default Models;