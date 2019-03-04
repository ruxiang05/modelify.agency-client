import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import JobList from './JobList';
import Models from './Models';
import AddJob from './AddJob/AddJob';
import ChatList from './Chat/ChatList';
import Profile from './Profile/Profile';
import NotFound from './NotFound';
import Signup from './Signup';
import Login from './Login';
import AddModel from './AddModel';
import ProtectedRoute from './ProtectedRoute';
import Availability from './Availability';
import Job from './Job';
import Chat from './Chat/Chat';

const Main = ({ user }) => (
  <Switch>
    <Redirect from="/" exact to="/jobs" />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <ProtectedRoute path="/jobs" exact component={JobList} />
    {user && user.role === 'agent' && (
    <ProtectedRoute path="/models" component={Models} />
    )}
    {user && user.role === 'agent' && (
    <ProtectedRoute path="/jobs/new" component={AddJob} />
    )}
    {user && user.role === 'model' && (
    <ProtectedRoute path="/availability" component={Availability} />
    )}
    <ProtectedRoute path="/chats" exact component={ChatList} />
    <ProtectedRoute path="/profile" component={Profile} />
    <ProtectedRoute path="/add-model" component={AddModel} />
    <ProtectedRoute path="/jobs/:id" component={Job} />
    <ProtectedRoute path="/chats/:id" component={Chat} />
    <Route component={NotFound} />
  </Switch>
);

Main.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default Main;
