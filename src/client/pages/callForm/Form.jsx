import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, registerField, reset } from "redux-form";
import { Button } from "reactstrap";
import TextField from "../../common/TextField";
import SelectField from "../../common/SelectField";
import RadioField from "../../common/RadioField";
import Submit from "./SubmitButton";
import { saveCall } from "../../store/actions/CallActions";
import moment from "moment";

class Form extends Component {
  // componentDidMount() {
  //   this.props.dispatch(registerField(this.props.name, "startTime", "Field"));
  //   this.props.dispatch(registerField(this.props.name, "endTime", "Field"));
  //   this.props.dispatch(registerField(this.props.name, "time", "Field"));
  //   this.props.dispatch(registerField(this.props.name, "client_type", "Field"));
  // }

  onSubmit = formProps => {
    this.props.onSubmit(formProps, () => {
      this.props.reset();
      this.props.resetTimer();
    });
  };

  render() {
    const { isOldUser, className, handleSubmit, name } = this.props;
    const formName = isOldUser ? "Old user" : "New user";
    return (
      <div className={`callLogForm ${className}`} onClick={this.props.onClick}>
        <form className={className} onSubmit={handleSubmit(this.onSubmit)}>
          {formName}
          <TextField
            label={isOldUser ? "Customer ID" : "Session Code"}
            name={isOldUser ? "customerId" : "sessionCode"}
          />
          <RadioField
            icons
            name="platform"
            options={[
              {
                name: "android",
                icon: "android"
              },
              {
                name: "ios",
                icon: "apple"
              },
              {
                name: "desktop",
                icon: "laptop"
              }
            ]}
          />
          <SelectField name="reason" label="Reason" options={["a", "b"]} />
          <SelectField
            name={isOldUser ? "cancelation_reason" : "payment_issues"}
            label={isOldUser ? "Cancellation reason" : "Payment issues"}
            options={["", "a", "b"]}
          />
          <SelectField
            name="language"
            label="Language"
            options={["English", "French", "German"]}
          />
          <TextField label="Email" name="email" type="email" />
          <TextField label="Comment" name="comment" />
          <Button onClick={() => handleSubmit(this.onSubmit())}>
            Submit call
          </Button>
        </form>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    { saveCall }
  ),
  connect((state, props) => ({
    form: props.name,
    onSubmit: (formProps, callback) =>
      props.saveCall(
        {
          ...formProps,
          timeStart: props.time.startTime
            ? moment(props.startTime).toISOString()
            : null,
          timeEnd: props.time.endTime
            ? moment(props.endTime).toISOString()
            : null,
          time: props.time.time ? props.time.time : null,
          client_type: props.isOldUser ? "old" : "new"
        },
        callback
      )
  })),
  reduxForm({
    asyncBlurFields: []
  })
)(Form);
