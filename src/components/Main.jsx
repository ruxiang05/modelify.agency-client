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

const Main = () => (
  <Switch>
    <Redirect from="/" exact to="/jobs" />
    <Route path="/jobs" exact component={JobList} />
    <Route path="/models" component={ModelsList} />
    <Route path="/jobs/new" component={AddJob} />
    <Route path="/chat" component={Chat} />
    <Route path="/profile" component={Profile} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Main;
