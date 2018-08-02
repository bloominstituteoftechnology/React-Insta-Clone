import React from "react";
import UserName from "./UserName";
import UserIcon from "./UserIcon";

let PostHeader = props => {
  return (
    <div className="header">
      <UserIcon imgS={props.thumbnail} />
      <UserName> {props.userdisplay}</UserName>
    </div>
  );
};

export default PostHeader;
