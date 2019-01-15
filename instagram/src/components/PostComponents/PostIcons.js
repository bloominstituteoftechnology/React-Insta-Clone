import React from 'react';

import './Post.css';

const PostIcons = props => {
  return (
    <div className="post-icons">
      <img src="images/heart.png" alt="Heart"/>
      <img src="images/comment.png" alt="comment"/>
    </div>
  );
};

export default PostIcons;