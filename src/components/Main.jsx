import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JobList from './JobList';
import ModelsList from './ModelsList';
import AddJob from './AddJob';
import Chat from './Chat';
import Profile from './Profile';
import NotFound from './NotFound';

const Main = () => (
    <Switch>
        <Route path="/jobs" exact component={JobList} />
        <Route path="/models" exact component={ModelsList} />
        <Route path="/jobs/new" exact component={AddJob} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/profile" exact component={Profile} />
        <Route component={NotFound} />
    </Switch>
);

export default Main;