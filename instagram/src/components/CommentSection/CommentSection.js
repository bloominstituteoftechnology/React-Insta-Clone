import React from 'react';
import PropTypes from 'prop-types';

//recieve array from Post container via props and render a 'comment' component with, username, and text,

const Comment = props => {
  console.log(props)
  return (
    <div className="comment">
    {props.comments.username} {props.comments.text}
    </div>
  )
}

const CommentSection = props => {
  console.log(props.comments);
  return (

    <div className="comment-section">
      {props.comments.map( (comment) => <Comment
        key={comment.id}
        comments={comment}/>)}
      <p className="timestamp">{props.time}</p>
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

//check that data is the correct type

export default CommentSection;
