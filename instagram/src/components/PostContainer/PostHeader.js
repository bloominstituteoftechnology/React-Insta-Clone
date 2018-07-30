import React from 'react';

const PostHeader = props => {
  return (
    <div>
      <img src={props.user.thumbnailUrl} />
      <h5>{props.user.username}</h5>
    </div>
  );
};

export default PostHeader;
