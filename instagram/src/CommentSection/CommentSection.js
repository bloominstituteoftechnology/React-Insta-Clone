import React from "react";

const CommentSection = props => {
  return (
    <React.Fragment>
      {props.comments.map((each, i) => {
        return (
          <div>
            <b>{each.username}</b> {each.text}
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default CommentSection;
