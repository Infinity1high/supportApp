import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.logOut();
    }
    componentDidUpdate() {
      this.logOut();
    }
    logOut() {
      if(this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
