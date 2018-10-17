import React from 'react';
import "../PostSubComponent/PostSubComponent.css";
import CommentSection from "../../CommentSection/CommentSection"
const PostSubComponent = ( props ) =>
{
  return( 
    <div className = "post-sub-component">
      <p>{ props.data.username }</p>
      <img src = { props.data.thumbnailUrl }></img>
      <img src = { props.data.imageUrl }></img>
      <p>{ props.data.likes }</p>
      <CommentSection comments = { props.data.comments }/>
    </div>
  )
}

export default PostSubComponent;