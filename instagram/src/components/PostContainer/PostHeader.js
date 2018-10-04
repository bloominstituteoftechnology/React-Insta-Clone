import React from 'react';

const PostHeader = props => {
  return (
    <div className="post-header">
      <img src={props.thumbnail} alt="avatar" />
      {props.username}
    </div>
  );
}

export default PostHeader;
