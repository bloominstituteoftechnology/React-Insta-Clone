import React from 'react'
import moment from 'moment'

const Timestamp = props => {
  return (
    <div className='date-stamp'>
      <p>{moment(props.timestamp, 'MMMM Do YYYY h:mm:ss a').fromNow()}</p>

    </div>
  )
}


export default Timestamp;
