import React from 'react';
import './PostContainer.css';

const PostLikes = (props) => {
  return(
    <div className="post__likes">{props.likes} likes</div>
  );
};

export default PostLikes;