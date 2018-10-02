import React from 'react';

const Comments = (props) =>  {
  return (
    <section className='comments'>
        {props.comments.map(comment => {
          return (
            <p className='comment'>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          );
        })}
        
    </section>
  );
}

export default Comments;
