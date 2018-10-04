import React from 'react';

const CommentSection = props => {
  return (
    <div className="post-comments">
      {props.comments.map(user => 
        <>
        {user.username}
        {user.text}
        </>
        )}
    </div>
  );
}

export default CommentSection;
