import React, { Fragment } from 'react';

import InputField from './InputField';

function RadioField(props) {
  const { options, input, icons } = props;
  return (
    <Fragment>
      {
        options.map((item, index) => {
          const value = icons ? item.name : item
          const id = index + value;
          return (
            <Fragment key={id}>
              <input
                id={id}
                onChange={() => input.onChange(item)}
                value={value}
                checked={JSON.stringify(item) === JSON.stringify(input.value)}
                type="radio"
                className={icons ? 'radio-icon' : null}
              />
              {
                icons ? <label htmlFor={id} className="radio-icon"><i className={`fa fa-${item.icon}`} /></label> : value
              }
            </Fragment>
          );
        })
      }
    </Fragment>
  );
}

export default InputField(RadioField);
