import React from 'react';

const PostContainerHeader = props => {
  return (
    <div className="post-container-header">
      <img src={props.thumbnail} />
      {props.username}
    </div>
  );
}

export default PostContainerHeader;
