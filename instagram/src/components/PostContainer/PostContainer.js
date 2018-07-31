// import PropTypes from "prop-types";
import React from "react";
import "./PostContainer.css";
import Post from "./Post.js";

const postContainer = props => {
  return (
    <div className="post-container">
      {props.toes.map(item => <Post butt={item} />)}
    </div>
  );
};

export default postContainer;
