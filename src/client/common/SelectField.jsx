import React from "react";
import { Input } from "reactstrap";

import InputField from "./InputField";

function SelectField(props) {
  const { options, disabled, input } = props;
  return (
    <Input
      value={input.value}
      type="select"
      name="select"
      id="exampleSelect"
      disabled={disabled}
      onChange={input.onChange}
    >
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </Input>
  );
}

export default InputField(SelectField);
