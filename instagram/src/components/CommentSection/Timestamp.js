import React from 'react'
import moment from 'moment'

const Timestamp = props => {
 var moment = require('moment')
 let date = props.timestamp;
 console.log(props.timestamp);
 let momentDate = moment(date, 'MMMM Do YYYY h:mm:ssa'); 

  return (
    <div className='date-stamp'>
      <p>{momentDate}</p>

    </div>
  )
}


export default Timestamp;
