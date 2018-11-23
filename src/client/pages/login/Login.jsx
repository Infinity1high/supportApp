import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import TextField from '../../common/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import * as actions from '../../store/actions/AuctActions';
import AuthReducer from "../../store/reducers/auth";
import { required, email } from '../../utils/validation';

class Login extends Component {

  onSubmit = formProps => {
    this.props.login(formProps,
      () => this.props.history.push('/registration')
    )}

  render() {

    const { handleSubmit, errorMessage, ...props } = this.props
    return (
      <div className="login-container">
        <form onSubmit={handleSubmit(this.onSubmit)} className="login-form">
          { errorMessage
            ? <div className="submit-error">{errorMessage}</div>
            : null
          }
          <h2>Login to your account</h2>
          <TextField
            {...props}
            name="loginEmail"
            placeholder="Enter your email"
            extraAddon="@"
            validate={[required, email]}
          />
          <TextField
            {...props}
            type="password"
            name="loginPassword"
            placeholder="Enter your password"
            extraAddon={<i className="fa fa-lock" />}
            validate={[required]}
          />
          <Button outline color="success">Login</Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.AuthReducer.errorMessage,
    authenticated: state.AuthReducer.errorMessage
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'login',
  }),

)(Login);
