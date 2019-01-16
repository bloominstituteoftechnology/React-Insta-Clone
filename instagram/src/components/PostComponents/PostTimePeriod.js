import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'moment';

import './Post.css';

const PostTimePeriod = props => {
  const formatTimestamp = timestamp => {
      const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];

      const parts = timestamp.split(" ");
      
      const year = parts[2].substring(0, 4);
      const month = String(monthNames.indexOf(parts[0]) + 1).padStart(2, "0");
      const date = parts[1].match(/\d+/)[0].padStart(2, "0");

      const timeParts = parts[3].split(":");
      const hours = String(parts[4] === "pm" ? 
                            +timeParts[0] + 12 * Number(timeParts[0] !== "12"):
                            +timeParts[0] * Number(timeParts[0] !== "12"))
                      .padStart(2, "0");
      const minutes = timeParts[1].padStart(2, "0");
      const seconds = timeParts[2].padStart(2, "0");

      const formattedTimestamp = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`

      return Moment().diff(Moment(formattedTimestamp), 'days') ?
              Moment(formattedTimestamp).format('MMMM D, YYYY') :
              Moment(formattedTimestamp).fromNow();
  }

  return (
    <span className="post-time-period">{formatTimestamp(props.timestamp)}</span>
  );
};

PostTimePeriod.propTypes = {
  timestamp: PropTypes.string.isRequired
};

export default PostTimePeriod;