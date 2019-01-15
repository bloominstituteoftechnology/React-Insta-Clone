import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return <Comment username={comment.username} text={comment.text}/>
      })}
    </div>
    
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })
  )
}

export default CommentSection
