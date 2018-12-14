import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import Moment from 'react-moment';

const TimePosted = props => {
  console.log(moment())
  return <Moment toNow>{props.timestamp}</Moment>;

};

TimePosted.propTypes = {
  timestamp: PropTypes.string
};

export default TimePosted;
