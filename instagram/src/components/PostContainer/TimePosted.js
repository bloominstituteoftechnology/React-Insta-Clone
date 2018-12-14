import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import Moment from 'react-moment';

const TimePosted = props => {
  return <span className={"time-posted"}>{props.timestamp}</span>;
};

TimePosted.propTypes = {
  timestamp: PropTypes.string
};

export default TimePosted;
