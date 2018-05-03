import React from 'react';
import './CommentSection.css';


const CommentSection = props => {
  return (
    <div>
      <h6 className="comUsername">{props.comment.username}</h6>
      <h6 className="comText">{props.comment.text}</h6>
    </div>
  );
};



{/*import React from "react";

const CommentSection = props => {
    return (
    <div>
    <div>{props.name}</div>
    <div>{props.username}</div>
    </div>
    );
}*/}


export default CommentSection;