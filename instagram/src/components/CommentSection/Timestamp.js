import React from 'react';
import moment from 'moment';

const Timestamp = props => {
  let date = props.Timestamp;
  let formatted = moment(date, 'MMMM Do YYYY, h:mm:ss a')

  return (
    <React.Fragment>
      <p className='moment'>{moment(`${props.timestamp}`).fromNow()}</p>
    </React.Fragment>
  )
}

export default Timestamp;
