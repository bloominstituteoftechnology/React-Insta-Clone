import React from "react";
import "./Posts.css";

const PostContent = props => {
  return (
    <div>
      <img src={props.imageUrl} alt=""/>
    </div>
  );
};

export default PostContent;
