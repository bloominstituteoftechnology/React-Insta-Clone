import React from "react";
// import comment-bubble from './logos/instagram-comment-bubble.png'
import commentHeart from "../../assets/instagram-comment-heart.png";
import commentBubble from "../../assets/instagram-comment-bubble.png";

const CommentIcons = props => {
  return (
    <div>
      <img src={commentHeart} alt="heart" className="comment-icon" />
      <img src={commentBubble} alt="bubble" className="comment-icon" />
    </div>
  );
};

export default CommentIcons;
