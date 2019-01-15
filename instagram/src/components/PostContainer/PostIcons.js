/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const PostIcons = props => {
  return (
    <div>
      <div className="icon-container">
        <div className="icons">
          <img
            src={require(`../SearchBar/Images/largeHeart.png`)}
            alt=""
            className="post-icons"
          />
          <img
            src={require(`../SearchBar/Images/bubble.png`)}
            alt=""
            className="post-icons"
          />
        </div>

        <a href="#" className="likes">
          {" "}
          {props.data.likes} likes
        </a>
      </div>
    </div>
  );
};

export default PostIcons;
