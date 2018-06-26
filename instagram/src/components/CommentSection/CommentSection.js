import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
  console.log(props.post.comments);
  return (
    <div>
      <div>
        {props.post.comments.map((comment) => (
          <div>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
      <input type="text" placeholder="add comment" />
    </div>
  );
};

export default CommentSection;

// CommentSection.propTypes = {
//   post: PropTypes.shape({
//     comments: PropTypes.string
//   })
// };
