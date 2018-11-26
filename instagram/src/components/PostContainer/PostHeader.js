import React from 'react';

function PostHeader(props) {
  return (
    <div className="post-header">
    	<img className="profile-image" src={props.imgSrc}></img>
      <div className="profile-name">{props.username}</div>
    </div>
  );
}

export default PostHeader;
