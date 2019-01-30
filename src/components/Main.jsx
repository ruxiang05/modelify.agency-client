import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import JobList from './JobList';
import ModelsList from './ModelsList';
import AddJob from './AddJob';
import Chat from './Chat';
import Profile from './Profile';
import NotFound from './NotFound';
import Signup from './Signup';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

const Main = () => (
  <Switch>
    <Redirect from="/" exact to="/jobs" />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <ProtectedRoute path="/jobs" exact component={JobList} />
    <ProtectedRoute path="/models" component={ModelsList} />
    <ProtectedRoute path="/jobs/new" component={AddJob} />
    <ProtectedRoute path="/chat" component={Chat} />
    <ProtectedRoute path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch>
);

export default Main;
