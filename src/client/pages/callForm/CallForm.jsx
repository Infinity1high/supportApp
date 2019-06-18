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
      isOldUser: true
    };
  }

    switchToOldUser = () => this.setState({isOldUser: true});

    switchToNewUser = () => this.setState({isOldUser: false});

  render() {
    const { ...props } = this.props;

    return (
        <div className="call-log-container">
          <Form onClick={this.switchToOldUser}
            time={props}
            isOldUser
            className={this.state.isOldUser ? null : 'disabled'}
            name="supportForm"
          />
          <Form
              onClick={this.switchToNewUser}
              time={props}
              className={this.state.isOldUser ? 'disabled' : null}
              name="salesForm"
          />
        </div>
    );
  }
}


export default withTimer(CallForm);
