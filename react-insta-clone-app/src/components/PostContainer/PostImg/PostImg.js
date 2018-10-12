import React from "react";
import "./PostImg.css";

export default ({ imageUrl }) => {
  return <img src={imageUrl} alt="post-img" className = 'post-image' />;
};