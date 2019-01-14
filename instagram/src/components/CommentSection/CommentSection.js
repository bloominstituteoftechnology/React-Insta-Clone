import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
const CommentSection = props => {
  const { text, username } = props.comments;
  return (
    <div>
      {props.comments.map(comment => {
        return <Comment username={comment.username} text={comment.text}/>
      })}
    </div>
    
  )
}

CommentSection.propTypes = {

}

export default CommentSection
