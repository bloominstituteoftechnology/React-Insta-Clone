import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
  console.log(props.comment);
  //comment is passed from post container as props
  return (
    <div>
      <div>{props.comment.username}</div>
      <div>{props.comment.text}</div>
      {/* <div>
        {props.comment.map((comment) => (
          <div>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div> */}
      {/* <input type="text" placeholder="add comment" /> */}
    </div>
  );
};

export default CommentSection;

// CommentSection.propTypes = {
//   post: PropTypes.shape({
//     comments: PropTypes.string
//   })
// };
