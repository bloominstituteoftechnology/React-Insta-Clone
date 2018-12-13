import React from "react";
import "./PostContainer.css";

const TimePosted = props => {
  return <span className={"time-posted"}>{props.timestamp}</span>;
};

export default TimePosted;
