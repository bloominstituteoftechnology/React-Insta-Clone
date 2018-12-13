import React from 'react';

const PostContainer = props => {
  return (
    <div>
      <div>
        <img src={props.data.thumbnailUrl}/>
        <div>{props.data.username}</div>
      </div>
      <div>
        <img src={props.data.imageUrl} />
      </div>
      <div>
        <div>{props.data.likes}</div>
        <div>{props.data.timestamp}</div>
      </div>
    </div>
  );
};

export default PostContainer;
