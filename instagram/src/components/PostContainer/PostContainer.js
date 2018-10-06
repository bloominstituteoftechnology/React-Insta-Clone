import React from 'react';
import "./PostContainer.css";
import CommentSection from  '../CommentSection/CommentSection';



const PostContainer = (props) => {
  console.log(props)
  return (
    
    <div>
      <h2>Current Posts</h2>
      User: {props.username}
      <img src={props.imageUrl} alt="Post image" width={200} height={200}/> 
      {/* or use class name in css */}
    
      <div>
        <CommentSection commentProps={props.comments} /> 
      </div>
  </div>
  )
}
export default PostContainer;
// ☞ 844fa9fb-2a20-4071-aeb5-a620a0d95ebd
