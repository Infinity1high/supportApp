import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './app.css';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import CallForm from './pages/callForm/CallForm';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={CallForm} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </Fragment>
    );
  };
}
