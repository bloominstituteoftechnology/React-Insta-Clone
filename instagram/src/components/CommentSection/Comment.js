import React from 'react'
import PropTypes from 'prop-types';

const Comment = props => {
  return (

  <div className='comment'>
    <p> <b>{props.comment.username}</b> {props.comment.text} Don't forget to check out</p>
  </div>
  )
}

Comment.propTypes = {
  comments: PropTypes.shape({
    text: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  })

}

export default Comment
