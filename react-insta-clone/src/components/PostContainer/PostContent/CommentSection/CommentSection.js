import React from 'react';
import propTypes from 'prop-types';

const CommentSection = (props) =>  {
  return (
    <section className='comments'>
        {props.comments.map((comment, index) => {
          return (
            <p className='comment' key={Math.random()}>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          );
        })}

    </section>
  );
}

CommentSection.propTypes = {
  comments: propTypes.array
}

export default CommentSection;
