import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    <div>
      <div>{props.post.username}</div>
      <img src={props.post.imageUrl} width="400"/>
      <div>{props.post.likes} likes</div>
      <CommentSection comments={props.post.comments}/>

    </div>
  );
}

export default PostContainer;
