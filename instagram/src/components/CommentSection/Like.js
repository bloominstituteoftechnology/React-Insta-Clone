import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Like = props => {
  return (
      <div>
       <span onClick={props.increment} className="like-icon"><i className="far fa-heart"></i></span>
       <p className="likes">{props.like} likes</p>
      </div>
  );
};

export default Like;
