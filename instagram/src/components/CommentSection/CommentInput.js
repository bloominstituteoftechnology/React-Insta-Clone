import React from "react";

const CommentInput = props => {
  return (
    <form>
      <input type="text" value={props.comment} placeholder="Add comment..." />"
    </form>
  );
};

export default CommentInput;
