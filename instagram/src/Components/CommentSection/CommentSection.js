import React from 'react';

const CommentSection = props => {
  return (
    <div>
      {props.c.map(c => (
        <div>
          <div className="post-comments">
            <div key={c.username}>
              {c.username} {c.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
