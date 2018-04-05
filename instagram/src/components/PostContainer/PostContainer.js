import React from 'react';

function PostContainer(props) {
  return (
    <div>
      <div>{props.post.username}</div>
      <img src={props.post.imageUrl} width="400"/>

    </div>
  );
}

export default PostContainer;
