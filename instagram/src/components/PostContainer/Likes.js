import React from "react";
import "./PostContainer.css";

const Likes = () => {
  return (
    <div>
      <div className="post-icons">
        <div>
          <i class="far fa-heart" />
          <i class="far fa-comment" />
          <i class="far fa-share-square" />
        </div>
        <i class="far fa-bookmark" />
      </div>
      <div className="like-count">400 likes</div>
    </div>
  );
};

export default Likes;
