import React from 'react'
import PropTypes from 'prop-types';

import Comment from './Comment'

const CommentSection = props => {
  return (
    <div>
  {  props.comments.map(comment =>
    <Comment comment={comment} /> )}
    <form>
      <label>
        Comment
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Comment" />
    </form>
  </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.array
}




export default CommentSection
