import React from 'react'
import moment from 'moment'

const Timestamp = props => {
 var moment = require('moment')
 let date = props.timestamp;
 let momentDate = moment(date).format('MMMM DD YYYY, h:mm:ss a')

  return (
    <div className='date-stamp'>
      {/* {' '}
      <Moment fromNow>{fortmatDate}</Moment> (<small>
        {moment(fortmatDate).format('LL')}
      </small>) */}
      <p>{momentDate}</p>

    </div>
  )
}

export default Timestamp;
