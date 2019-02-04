import React from 'react';
import PropTypes from 'prop-types';
import api from '../api';
import ModelCard from './ModelCard';
import { getToken } from '../auth';

class ModelsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: [],
    };
    this.redirectToAddModel = this.redirectToAddModel.bind(this);
  }

  componentDidMount() {
    const token = getToken();
    api.agents.getModels(token).then((res) => {
      const { models } = res.agent.agentInfo;
      this.setState({ models });
    });
  }

  redirectToAddModel() {
    const { history } = this.props;
    history.push('/add-model');
  }

  render() {
    const { models } = this.state;
    return (
      <div className="page">
        <button type="button" onClick={this.redirectToAddModel}>
                    Add model
        </button>
        {models ? (
          <ul>
            {models.map(model => (
              <li key={models.indexOf(model)}>
                <ModelCard {...model} />
              </li>
            ))}
          </ul>
        ) : (
          <div>No models yet</div>
        )}
      </div>
    );
  }
}

ModelsList.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default ModelsList;
