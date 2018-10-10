import React from "react";
import PropTypes from 'prop-types';

const Comment = props => {
  return (
  <div className="Comment">
    <p><span>{props.comment.username}</span>{"  "}
    {props.comment.text}</p>
  </div>
  )
};

Comment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
  username: PropTypes.string,
  text: PropTypes.string,
}))}

export default Comment;