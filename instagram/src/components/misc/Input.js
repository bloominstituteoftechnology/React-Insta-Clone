import React from 'react';

export const Input = props => {
  return (
    <input
      className={ props.inputClassName }
      name={ props.inputName }
      onChange={ props.handleInputValueChange }
      placeholder={ props.inputPlaceHolder }
      value={ props.inputValue }
    />
  );
}