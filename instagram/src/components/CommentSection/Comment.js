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



export default Comment
