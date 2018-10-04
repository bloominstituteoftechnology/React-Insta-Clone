import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return (
      <>
        <div>
            <h5>Heart</h5>
            <h5>Comment</h5>
        </div>
        <div>
            <h3>{props.likes}</h3>
        </div>
        {props.comments.map(comment => (
            <Comment comment={comment} />
        ))}
      </>  
    );
}

export default CommentSection;