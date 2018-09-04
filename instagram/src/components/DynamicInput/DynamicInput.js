import React from "react";

const DynamicInput = props => {
  return (
    <div className="iptctnr">
      <input
        className="ipt"
        type="text"
        value={props.textOnProps}
        onChange={props.handleInputOnProps}
        name={props.inputName}
      />
    </div>
  );
};

export default DynamicInput;
