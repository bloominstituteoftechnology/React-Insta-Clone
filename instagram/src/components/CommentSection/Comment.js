import React from 'react'
import PropTypes from 'prop-types';

const Comment = props => {
  return (

  <div>

    <p> comment: {props.comment.text}</p>
    <p> user: {props.comment.username} </p>

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
