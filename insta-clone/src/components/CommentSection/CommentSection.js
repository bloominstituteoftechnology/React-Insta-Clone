import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentBar from './CommentBar';
// this component contains all comments in a given post

const CommentSection = props => {
  return (
    <div className="commentSection">
    {props.commentData.map((comment, index) => (
      <Comment
        key={index}
        username={comment.username}
        text={comment.text}
      />

    )
  )}
  <CommentBar
    addComment={props.addComment}
    handleComment={props.handleComment}
    commentText={props.commentText}/>
  </div>

)
}

CommentSection.propTypes = {
  commentData: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })),
}

export default CommentSection;
