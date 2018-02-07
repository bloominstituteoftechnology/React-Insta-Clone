import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <div className="commentSection">
      <h6>{props.dummy[0].username}</h6>
    </div>
    )
}

export default CommentSection;