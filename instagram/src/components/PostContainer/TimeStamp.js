import React from 'react';
import PropTypes from 'prop-types';


const TimeStamp = props => {
    return(
        <div className="time-stamp">
            <p>{props.timestamp}</p>
        </div>
    );
}

export default TimeStamp;


TimeStamp.propTypes = {
    timestamp: PropTypes.string
}