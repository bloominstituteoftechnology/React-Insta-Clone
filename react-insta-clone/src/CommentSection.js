import React from 'react';

const CommentSection = props => {
  return (
    <>
      {props.dummyData.comments.map(comment => (
        <>
          <div key={comment.username}>
            <strong>{comment}</strong>
          </div>

        </>
      ))}
    </>
  );
};



export default CommentSection;
