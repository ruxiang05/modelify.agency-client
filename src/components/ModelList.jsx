/* Uses methods and/or components from react */
import React from 'react';
import api from '../api';
import ModelCard from './ModelCard';
import { getToken } from '../auth';
import { ReactComponent as NoModels } from '../assets/icons/undraw_online_friends_x73e.svg';
import '../styles/no-data.scss';

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
        {models.length ? (
          <ul>
            {models.map(model => (
              <li key={models.indexOf(model)}>
                <ModelCard model={model} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-data">
            <NoModels />
            <p>You do not have any models yet</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ModelList;
