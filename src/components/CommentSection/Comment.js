import React from 'react'
import PropTypes from 'prop-types'
import './Comments.css'

const Comment = (props) => {
  return (
    <React.Fragment>
      <p>{props.comment.username}: {props.comment.text}</p>
    </React.Fragment>
  )
}

Comment.propTypes = {
  text: PropTypes.string,
  username: PropTypes.string
}

export default Comment
