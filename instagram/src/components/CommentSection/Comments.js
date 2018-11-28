import React from "react";
import "./Comments.css";

const Comments = props => {
  return (
    <div className="comments">
      {props.comments.map(x => {
        return (
          <div>
            <p>{x.username}</p>
            <p>{x.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
