import React from 'react';

export const Input = props => {
  return (
    <input
      className={ props.inputClassName }
      name={ props.inputName }
      onChange={ props.handleInputValueChange }
      value={ props.inputValue }
    />
  );
}