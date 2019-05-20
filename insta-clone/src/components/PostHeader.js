//header
import React from 'react';

const PostHeader = props => {
  return (
    <div>
      <div className="profilePic">
        <img
          alt="profile picture"
          src={props.thumbnailUrl}
          />
      </div>
      <div className="userName">
        <strong>{props.username}</strong>
      </div>
    </div>
)
}

export default PostHeader;
