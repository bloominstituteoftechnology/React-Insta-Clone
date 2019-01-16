import React from 'react';
import PropTypes from 'prop-types';

import Moment from 'moment';

import './Post.css';

const PostTimePeriod = props => {
  return (
    <span className="post-time-period">
      {Moment().diff(Moment(props.timestamp, "MMMM Do YYYY, h:mm:ss a"), 'days') ?
        Moment(props.timestamp, "MMMM Do YYYY, h:mm:ss a").format('MMMM D, YYYY') :
        Moment(props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
    </span>
  );
};

PostTimePeriod.propTypes = {
  timestamp: PropTypes.string.isRequired
};

export default PostTimePeriod;