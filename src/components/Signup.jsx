import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import RadioFormInput from './RadioFormInput';
import { UserContext } from '../contexts/userContext';
import api from '../api';
import '../styles/signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      role: 'agent',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  handleSubmit(event) {
    const user = this.state;
    const { history } = this.props;
    const { updateUser } = this.context;
    event.preventDefault();
    api.users
      .signup(user)
      .then((res) => {
        if (res.ok) {
          updateUser(user);
          history.push('/');
        }
      })
      .catch(error => error);
  }

  render() {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          type="text"
          name="email"
          title="Email"
          value={email}
          placeholder="Enter your email"
          handleChange={this.handleChange}
        />
        <FormInput
          type="text"
          name="password"
          title="Password"
          value={password}
          placeholder="Enter your passowrd"
          handleChange={this.handleChange}
        />
        <FormInput
          type="text"
          name="firstName"
          title="First Name"
          value={firstName}
          placeholder="Enter your first name"
          handleChange={this.handleChange}
        />
        <FormInput
          type="text"
          name="lastName"
          title="Last Name"
          value={lastName}
          placeholder="Enter your last name"
          handleChange={this.handleChange}
        />
        <FormInput
          type="text"
          name="phoneNumber"
          title="Phone"
          value={phoneNumber}
          placeholder="Enter your phone number"
          handleChange={this.handleChange}
        />
        <div>
          <label htmlFor="role">Role</label>
          <RadioFormInput
            id="role-agent"
            name="role"
            title="Agent"
            value="agent"
            handleChange={this.handleChange}
            checked
          />
          <RadioFormInput
            id="role-model"
            name="role"
            title="Model"
            value="model"
            handleChange={this.handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

Signup.contextType = UserContext;
export default Signup;
