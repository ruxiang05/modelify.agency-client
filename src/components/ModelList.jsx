import React from 'react';
import api from '../api';
import ModelCard from './ModelCard';
import { getToken } from '../auth';

class ModelList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: [],
    };
  }

  componentDidMount() {
    const token = getToken();
    api.agents.getModels(token).then((res) => {
      const { models } = res.agent.agentInfo;
      this.setState({ models });
    });
  }

  render() {
    const { models } = this.state;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default ModelList;
