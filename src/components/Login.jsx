import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import { UserContext } from '../contexts/userContext';
import api from '../api';
import { setToken } from '../auth';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
      .login(user)
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
    const { email, password } = this.state;
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

Login.contextType = UserContext;
export default Login;
