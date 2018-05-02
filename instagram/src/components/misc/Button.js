import React from 'react';

export const Button = props => {
  return (
    <button
      className={ props.buttonClassName }
      onClick={ props.handleButtonOnClick }
    >
      { props.buttonContent }
    </button>
  );
};