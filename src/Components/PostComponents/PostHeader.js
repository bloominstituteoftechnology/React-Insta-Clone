import React from 'react';
import './posts.css';

const PostHeader = props => {
  return(
    <div className="post-header">
      <div className="user-icon"><img src={props.thumbnail} alt="user profile icon" /></div>
      <div className="user-name"><strong>{props.user}</strong></div>
    </div>
  );
};

export default PostHeader;
