import React from 'react';
import PropTypes from 'prop-types';


const TimeStamp = props => {
    return(
        <div className="timestamp-container">
            <p className="timestamp">{props.timestamp}</p>
        </div>
    );
}

export default TimeStamp;


TimeStamp.propTypes = {
    timestamp: PropTypes.string
}