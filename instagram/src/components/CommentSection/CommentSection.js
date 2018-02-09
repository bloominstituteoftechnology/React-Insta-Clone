import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <div className="commentSection">
        <h6 className="commentSection__username">{props.dummy[0].username}</h6>
        <p className="commentSection__comments">{props.dummy[0].text}</p>
        <h6 className="commentSection__username">{props.dummy[1].username}</h6>
        <p className="commentSection__comments">{props.dummy[1].text}</p>
        <h6 className="commentSection__username">{props.dummy[2].username}</h6>
        <p className="commentSection__comments">{props.dummy[2].text}</p>
    </div>
    )
}

export default CommentSection;