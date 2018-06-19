import React from 'react'
import Moment from 'react-moment'

const CommentInput = (props) => {
  var moment = require('moment')
  let date = props.posts.timestamp
  let fortmatDate = moment(date, 'MMMM Do YYYY, h:mm:ss a')
  return (
    <div className='date-stamp'>
      {' '}
      <Moment fromNow>{fortmatDate}</Moment> (<small>
        {moment(fortmatDate).format('LL')}
      </small>)
      <form>
        <input
          placeholder='Add a comment...'
          type='text'
          className='comment-input'
        />
      </form>
    </div>
  )
}

export default CommentInput
