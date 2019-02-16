import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import PageHeader from './PageHeader';
import api from '../api';
import { getToken } from '../auth';

class AddModel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(prevState => ({ ...prevState, email: value }));
  }

  handleSubmit(event) {
    const { email } = this.state;
    const { history } = this.props;
    event.preventDefault();
    api.agents.addModel(getToken(), { model: email });
    history.push('/models');
  }

  render() {
    const { email } = this.state;
    const { history } = this.props;
    return (
      <React.Fragment>
        <PageHeader title="Add model" backButton history={history} />
        <div className="page">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              title="Add model"
              name="add-model"
              value={email}
              placeholder="Model email"
              handleChange={this.handleChange}
            />
            <div className="form-submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

AddModel.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default AddModel;
