import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
return (
<div className="post-header">
              <img
                className="user-img"
                src={props.thumbnailUrl}
                alt="User Thumbnail"
              />
              <p className="username">{props.username}</p>
            </div>
);
}

export default PostHeader;