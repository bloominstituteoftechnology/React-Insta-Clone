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
            data-username={props.username}
            data-button="toggleHeart"
            onClick={props.handleClick}
          />
          <img
            src={require(`../SearchBar/Images/bubble.png`)}
            alt=""
            className="post-icons"
          />
        </div>

        <a href="#" className="likes">
          {props.addLike ? props.data.likes + 1 : props.data.likes} likes
        </a>
      </div>
    </div>
  );
};

export default PostIcons;
