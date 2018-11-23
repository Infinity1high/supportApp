import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap'
import { Field } from 'redux-form'

function BaseField(props) {
  return (
    <FormGroup className={props.className}>
      { props.label && (
      <Label>
        { props.label }
        { props.required && <b className={'control-asterisk'}>*</b>}
      </Label>
      )}
      { props.meta.touched && props.meta.error &&
        <span className="error">{props.meta.error}</span>
      }
     <props.inputComponent {...props} />
    </FormGroup>
    )
  }

export default function(Component) {
  return function(props) {
    return (
      <Field
        {...props}
        name={props.name}
        component={BaseField}
        inputComponent={Component}
       />
    )
  }
}
