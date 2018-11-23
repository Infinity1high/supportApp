import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Button } from 'reactstrap';

const RemoteSubmitButton = ({ dispatch, color }) => (
  <Button
    color={color}
    onClick={() => dispatch(submit('callLogForm'))}
  >
    Submit
  </Button>
)

export default connect()(RemoteSubmitButton);
