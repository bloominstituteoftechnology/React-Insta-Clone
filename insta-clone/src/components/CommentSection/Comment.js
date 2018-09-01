import React from 'react';
import PropTypes from 'prop-types';
// this component will be responsible for rendering individual comments
const Comment = props => {
  return (
  <div className="comment">
   <h3 className="comment-username">{props.username}</h3>
   <p className="comment-text">{props.text}</p>
  </div>
)
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;
