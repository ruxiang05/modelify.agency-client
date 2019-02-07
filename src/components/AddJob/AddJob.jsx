import React from 'react';
import PropTypes from 'prop-types';
import AddJobDetails from './AddJobDetails';
import AddJobSelectModel from './AddJobSelectModel';
import { SelectModelProvider } from '../../contexts/SelectModelContext';
import api from '../../api';
import { getToken } from '../../auth';

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      model: '',
      title: '',
      date: '',
      address: '',
      pay: '',
      description: '',
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.selectModel = this.selectModel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  nextStep() {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  }

  prevStep() {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
  }

  selectModel(value) {
    const { history } = this.props;
    this.setState({
      model: value,
    }, () => {
      api.jobs.addJob(getToken(), this.state).then(() => history.push('/jobs'));
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  /* eslint-disable consistent-return,default-case */
  render() {
    const { step, ...values } = this.state;

    switch (step) {
      case 1: return <AddJobDetails {...values} handleChange={this.handleChange} nextStep={this.nextStep} />;
      case 2: return <SelectModelProvider value={{ selectModel: this.selectModel }}><AddJobSelectModel {...values} prevStep={this.prevStep} /></SelectModelProvider>;
    }
  }
}

AddJob.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default AddJob;
