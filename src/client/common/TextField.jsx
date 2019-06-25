import React, { Fragment } from "react";
import { Input, InputGroupAddon, InputGroupText } from "reactstrap";

import InputField from "./InputField";

function TextField(props) {
  const {
    input,
    placeholder,
    disabled,
    type,
    autoFocus,
    min,
    extraAddon
  } = props;
  const fieldInput = (
    <Input
      {...input}
      placeholder={placeholder}
      disabled={disabled}
      type={type || "text"}
      autoFocus={autoFocus}
      min={min}
    />
  );

  return extraAddon ? (
    <Fragment>
      <InputGroupAddon type="append">
        <InputGroupText>{extraAddon}</InputGroupText>
      </InputGroupAddon>
      {fieldInput}
    </Fragment>
  ) : (
    fieldInput
  );
}

export default InputField(TextField);
