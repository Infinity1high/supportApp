import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './app.css';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import CallForm from './pages/callForm/CallForm';
import CallListPage from './pages/callsList';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={CallForm} />
        <Route path="/calls" component={CallListPage} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </Fragment>
    );
  }
}
