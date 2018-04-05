import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    <div>
      <img src={props.post.thumbnailUrl} width="30" style={{display: 'inline-block'}} />
      <div>{props.post.username}</div>
      <img src={props.post.imageUrl} width="400"/>
      <div>{props.post.likes} likes</div>
      <CommentSection comments={props.post.comments} time={props.post.timestamp}/>

    </div>
  );
}

export default PostContainer;
