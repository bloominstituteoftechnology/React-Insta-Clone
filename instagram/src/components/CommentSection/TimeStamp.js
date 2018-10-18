import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'react-moment';


const TimeStamp = props => {
    // let date =  props.timestamp.split();
    // let newDate = new Date(`"${props.timestamp}"`);
    // console.log(date );
    return(
        <div className="timestamp-container">
            <p className="timestamp">
            {props.timestamp} 
            {/* <Moment fromNow>{props.timestamp}</Moment> */}
            </p>
        </div>
    );
}

export default TimeStamp;


TimeStamp.propTypes = {
    timestamp: PropTypes.string
}