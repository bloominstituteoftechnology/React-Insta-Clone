import React from "react";
import "./CommentSection.css";

const CommentSection = props => {
  let arr = props.comments.map((e, i) => (
    <div className="post__comment" key={`comment-${i}`}>
      <span className="username">{e.username}</span> {e.text}
    </div>
  ));
  return <div className="posts">{arr}</div>;
};

export default CommentSection;
