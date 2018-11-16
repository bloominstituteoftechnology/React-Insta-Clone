import React from "react";
const CommentComponent = props => {
  return (
    <div>
      <p>
        {props.data.username} {props.data.text}
      </p>
    </div>
  );
};
export default CommentComponent;
