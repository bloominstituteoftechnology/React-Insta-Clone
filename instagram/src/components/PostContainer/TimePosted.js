import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import Moment from "react-moment";

/*"MMMM Do YYYY, hh:mm:ss a"*/

const TimePosted = props => {
  return (
    <Moment parse="MMMM Do YYYY, hh:mm:ss a" fromNow>
      {props.timestamp}
    </Moment>
  );
};

TimePosted.propTypes = {
  timestamp: PropTypes.string
};

export default TimePosted;
