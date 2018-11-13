import React from 'react';

const PostHeader = props => {
  return (
    <div className="post--header">
      <img
      className="user--avatar"
      src={props.thumbnailUrl} 
      alt="user's avatar"/>
      <p className="user--name">{props.username}</p>
    </div>
  );
}

export default PostHeader;