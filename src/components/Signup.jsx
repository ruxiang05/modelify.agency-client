import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import RadioFormInput from './RadioFormInput';
import { UserContext } from '../contexts/userContext';
import api from '../api';
import { setToken } from '../auth';
import '../styles/signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
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
      .then((res, err) => {
        if (res.ok) {
          return api.users.login({
            email: user.email,
            password: user.password,
          });
        }
        return err;
      })
      .then((res, err) => {
        if (err) {
          return err;
        }
        return res.json();
      })
      .then((data) => {
        setToken(data.token);
        updateUser();
        history.push('/');
      })
      .catch(error => error);
  }

  render() {
    const {
      email, password, name, phoneNumber, role,
    } = this.state;
    return (
      <div className="page centered">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            title="Email"
            value={email}
            placeholder="Enter your email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            title="Password"
            value={password}
            placeholder="Enter your passowrd"
            handleChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="name"
            title="Name"
            value={name}
            placeholder="Enter your name"
            handleChange={this.handleChange}
          />
          <FormInput
            type="tel"
            name="phoneNumber"
            title="Phone"
            value={phoneNumber}
            placeholder="Enter your phone number"
            handleChange={this.handleChange}
          />
          <div>
            <label htmlFor="role">Role</label>
            <div>
              <RadioFormInput
                id="role-agent"
                name="role"
                title="Agent"
                value="agent"
                handleChange={this.handleChange}
                checked={role === 'agent'}
              />
              <RadioFormInput
                id="role-model"
                name="role"
                title="Model"
                value="model"
                handleChange={this.handleChange}
                checked={role === 'model'}
              />
            </div>
          </div>
          <div className="form-submit">
            <input type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

Signup.contextType = UserContext;
export default Signup;
