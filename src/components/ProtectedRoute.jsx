import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { UserConsumer } from '../contexts/userContext';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <UserConsumer>
    {({ user }) => (
      <Route
        render={props => (user ? <Component {...props} /> : <Redirect to="/login" />)
                }
        {...rest}
      />
    )}
  </UserConsumer>
);

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default ProtectedRoute;
