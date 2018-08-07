import React from "react";

const CommentSection = props => {
  return (
    <React.Fragment>
      {props.comments.map((each, i) => {
        return (
          <div className="post-comments">
            <b>{each.username}</b> <span>{each.text}</span>
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default CommentSection;
