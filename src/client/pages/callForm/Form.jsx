import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TextField from '../../common/TextField';
import SelectField from '../../common/SelectField';
import RadioField from '../../common/RadioField';
import Submit  from './SubmitButton';
import { saveCall } from '../../store/actions/CallActions';
import moment from 'moment';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startTime: this.props.startTime ? moment(this.props.startTime).toISOString() : null,
      endTime: this.props.endTime ? moment(this.props.endTime).toISOString() : null,
      time: this.props.time
    }
  }

  onSubmit = (formProps) => {
    this.props.saveCall({ ...formProps, ...this.state});
  }

  render() {
    const { isOldUser, className, handleSubmit } = this.props;
    const formName = isOldUser ? 'Old user' : 'New user'
    return (
      <div className={`callLogForm ${className}`}>
        <form className={className} onSubmit={handleSubmit(this.onSubmit)} initialValues={this.state}>
          {formName}
          <TextField
            label={isOldUser ? 'Customer ID' : 'Session Code'}
            name={isOldUser ? 'customerId' : 'sessionCode'}
          />
          <RadioField
            icons
            name="platform"
            options={[
              {
                name: 'android',
                icon: 'android'
              },
              {
                name: 'ios',
                icon: 'apple'
              },
              {
                name: 'desktop',
                icon: 'laptop'
              },
            ]}
          />
          <SelectField
            name="reasons"
            label="Reason"
            options={['a','b']}
          />
          <SelectField
            name={isOldUser ? 'cancelation_reason' : 'payment_issues'}
            label={isOldUser ? 'Cancellation reason' : 'Payment issues'}
            options={['a','b']}
          />
          <SelectField
            name="language"
            label="Language"
            options={['Endlish', 'French', 'German']}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
          />
          <TextField
            label="Comment"
            name="comment"
          />
        </form>
      </div>
    );
  }
}

const enhancedForm = reduxForm({
  form: 'callLogForm',
  asyncBlurFields: []
})

export default compose(
  connect(null, saveCall),
  reduxForm({
    form: 'callLogForm',
    asyncBlurFields: []
  })
  // connect(
  //   state => ({
  //     initialValues: state // pull initial values from account reducer
  //   }),
  // )(enhancedForm)
)(Form);
