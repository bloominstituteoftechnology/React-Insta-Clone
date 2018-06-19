import React from 'react';
import Post from '../Post/Post';

const PostContainer = props => {
  return (
      <Post key = {props.user.timestamp} username={props.user.username}
      thumbnail={props.user.thumbnailUrl} image={props.user.imageUrl}
      time={props.user.timestamp} likes={props.user.likes} comments={props.user.comments} />

  )
}

export default PostContainer;
