import React from 'react'
import PropTypes from 'prop-types';
import {Comments, UserName} from './styled'

const Comment = props => {
  return (
    <div className='comments'>
      <Comments><UserName>{props.comment.username}</UserName> <span>{props.comment.text} </span></Comments>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}
export default Comment;