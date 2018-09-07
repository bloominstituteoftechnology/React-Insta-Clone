import React from 'react'
import PropTypes from 'prop-types';
import {Username} from '../Styles/Reusable'

const Comment = props => {
  return (

  <div className='comment'>
    <p> <Username>{props.comment.username}</Username> {props.comment.text}</p>
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
