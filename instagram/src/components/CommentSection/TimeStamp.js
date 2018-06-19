import React from 'react'
import Moment from 'react-moment'

const TimeStamp = (props) => {
  var moment = require('moment')
  let date = props.posts.timestamp
  let fortmatDate = moment(date, 'MMMM Do YYYY, h:mm:ss a')
  return (
    <div className='date-stamp'>
      {' '}
      <Moment fromNow>{fortmatDate}</Moment> (<small>
        {moment(fortmatDate).format('LL')}
      </small>)
    </div>
  )
}

export default TimeStamp
