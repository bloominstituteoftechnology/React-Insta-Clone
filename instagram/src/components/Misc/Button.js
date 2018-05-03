import React from "react";

const Button = props => {
    return (
        <button
          className={ props.ButtonProp }
          onClick={props.handleButtonClick}
        >
          {props.ButtonContent}
        </button>
    )
}
export default Button;