import React from 'react';

const PostHeader = props => {
  return (
    <div className='post-header'>
      <img className="thumbnail-img" src={props.user.thumbnailUrl} />
      <h5>{props.user.username}</h5>
    </div>
  );
};

export default PostHeader;
