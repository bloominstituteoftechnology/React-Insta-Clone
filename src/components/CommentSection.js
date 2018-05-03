import React from "react";

const CommentSection = props => {
  return (
    <div>
    <h1>{props.messageFromAppjs}</h1>
    {props.dummyData.map(comments=> {
      return (
        <div key={comments.username + comments.text}>
        {comments.first_name} {comments.last_name}
        </div>
      );
    })}
    </div>
  );
};
export default CommentSection;
