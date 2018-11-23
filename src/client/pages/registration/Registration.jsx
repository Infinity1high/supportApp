import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import TextField from '../../common/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {email, required} from "../../utils/validation";
import * as actions from "../../store/actions/AuctActions";

import Timer from '../../components/Timer';

import RequireAuth from '../login/RequireAuth';
import Layout from '../../common/Layout';
import Form from '../callForm/Form';


class Registration extends Component {

  constructor(props) {
    super(props);
    this.Timer = React.createRef();
  }

  render() {
    const { ...props } = this.props;
    const { current: TimerComponent } = this.Timer;

    return (
      <Layout>
        <div className="registration-container">
          <Timer ref={this.Timer} />
          <Form {...props}  isOldUser/>
          <Form {...props}  />
          {/*<form className="registration-form">*/}
            {/*<h2>Add some information :) </h2>*/}
            {/*<TextField*/}
              {/*{...props}*/}
              {/*name="name"*/}
              {/*placeholder="How your friends call you?"*/}
              {/*validate={[required]}*/}
              {/*label="Name"*/}
            {/*/>*/}
            {/*<TextField*/}
              {/*{...props}*/}
              {/*name="lastName"*/}
              {/*placeholder="What is written in your passport?"*/}
              {/*validate={[required]}*/}
              {/*label="Last name"*/}
            {/*/>*/}
            {/*<TextField*/}
              {/*{...props}*/}
              {/*name="password"*/}
              {/*placeholder="Your new password"*/}
              {/*validate={[required]}*/}
              {/*label="Password"*/}
            {/*/>*/}
            {/*<TextField*/}
              {/*{...props}*/}
              {/*name="confirmPassword"*/}
              {/*placeholder="Confirm your password"*/}
              {/*validate={[required]}*/}
              {/*label="Confirm password"*/}
            {/*/>*/}
            {/*<Button color="danger">Cancel</Button>*/}
            {/*<Button color="success">Save</Button>*/}
          {/*</form>*/}
        </div>
      </Layout>
    );
  }
}


export default compose(
  RequireAuth,
  // connect(null, actions),
  // reduxForm({
  //   form: 'registration',
  // }),

)(Registration);
