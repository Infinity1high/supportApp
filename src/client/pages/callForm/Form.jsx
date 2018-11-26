import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, registerField } from 'redux-form';

import TextField from '../../common/TextField';
import SelectField from '../../common/SelectField';
import RadioField from '../../common/RadioField';
import Submit  from './SubmitButton';
import { saveCall } from '../../store/actions/CallActions';
import moment from 'moment';

class Form extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   startTime: this.props.time.startTime ? moment(this.props.startTime).toISOString() : null,
    //   endTime: this.props.time.endTime ? moment(this.props.endTime).toISOString() : null,
    //   time: this.props.time,
    //   time1: this.props
    // }
  }

  componentDidMount() {
    this.props.dispatch(registerField(this.props.name, "startTime", "Field"));
    this.props.dispatch(registerField(this.props.name, "endTimeTime", "Field"));
    this.props.dispatch(registerField(this.props.name, "time", "Field"));
  }

  // onSubmit = (formProps) => {
  //   this.props.saveCall({ ...formProps, ...this.state});
  // }

  render() {
    const { isOldUser, className, handleSubmit, name } = this.props;
    console.log(this.props.time)
    const formName = isOldUser ? 'Old user' : 'New user'
    return (
      <div className={`callLogForm ${className}`}>
        <form className={className}
              onSubmit={handleSubmit}

        >
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

export default compose(
  connect(null, { saveCall }),
  connect((state, props) => ({
    form: props.name,
    onSubmit: (formProps) => (
      props.saveCall({
        ...formProps,
        timeStart: props.time.timeStart ? moment(props.startTime).toISOString() : null,
        timeEnd: props.time.endTime ? moment(props.endTime).toISOString() : null,
        time: props.time.time ? props.time.time : null
      })
    )
  })),
  reduxForm({
    asyncBlurFields: []
  })
)(Form);
