import React, { Component } from 'react';
import { compose } from 'redux';
// import SubmitButton from './SubmitButton'

import { Button } from 'reactstrap';
import {email, required} from "../../utils/validation";

import withTimer from '../../components/Timer';

import RequireAuth from '../login/RequireAuth';
import Layout from '../../common/Layout';
import Form from './Form';


class CallForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOldUser: true,

    }
  }

  render() {
    const { ...props } = this.props;


    return (
        <div className="call-log-container">
          <Form {...props}  isOldUser className={this.state.isOldUser ? null : 'disabled'}/>
          <Form {...props} className={this.state.isOldUser ? 'disabled' : null} />
        </div>
    );
  }
}


export default withTimer(CallForm);
