import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  let arr = props.comments.map((e, i) => (
    <div className="post__comment" key={`comment-${i}`}>
      <span className="username">{e.username}</span> {e.text}
    </div>
  ));
  return <div className="posts">{arr}</div>;
};

Comment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Comment;
