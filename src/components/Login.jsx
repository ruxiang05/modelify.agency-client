import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import { UserContext } from '../contexts/userContext';
import api from '../api';
import { setToken } from '../auth';
import '../styles/login.scss';
import Logo from './Logo';

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
      <div className="page centered">
        <Logo />
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
            placeholder="Enter your password"
            handleChange={this.handleChange}
          />
          <div className="form-submit">
            <input type="submit" value="Log in" />
          </div>
        </form>
        <div className="to-sign-up">
          <p>OR</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

Login.contextType = UserContext;
export default Login;
