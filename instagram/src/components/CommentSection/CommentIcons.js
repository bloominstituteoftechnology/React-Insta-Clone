import React from "react";
// import comment-bubble from './logos/instagram-comment-bubble.png'
import commentHeart from "../../assets/instagram-comment-heart.png";
import commentBubble from "../../assets/instagram-comment-bubble.png";

const CommentIcons = props => {
  return (
    <div>
      <img src={commentHeart} alt="heart" />
      <img src={commentBubble} alt="bubble" />
    </div>
  );
};

export default CommentIcons;
