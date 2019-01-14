import React from 'react'
import PropTypes from 'prop-types'
import './comment-section.css'
const Comment = props => {

  return (
    <div class="comment">
      <h3>{props.username}</h3>
      <p>{props.text}</p>
    </div>
  )
}

Comment.propTypes = {

}

export default Comment
