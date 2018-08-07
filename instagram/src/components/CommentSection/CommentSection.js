import React from "react";

const CommentSection = props => {
  return (
    <div>
      <div>likes</div>
      <div>
        {props.comments.map((each, i) => {
          return (
            <div key={i}>
              <b>{each.username}</b> {each.text}
            </div>
          );
        })}
      </div>
      <div>input</div>
    </div>
  );
};

export default CommentSection;
