import React from "react";
import "./Comment.css";

const Like = props => {
  return (
      <div>
       <span onClick={props.increment} className="like-icon"><i className="far fa-heart"></i></span>
       <span className="likes">{props.like} likes</span>
      </div>
  );
};

export default Like;
