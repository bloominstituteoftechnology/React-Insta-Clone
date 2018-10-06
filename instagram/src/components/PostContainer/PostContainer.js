import React from 'react';
import "./PostContainer.css";
import CommentSection from  '../CommentSection/CommentSection';



const PostContainer = () => {
  return (
    
    <div>
      <h2>PostContainer</h2>
      {this.state.instaClonePosts.map(post => {
        return (
          <div key={post.id}>
          {post.username} {post.imageUrl}
          </div>
        )
      })}
      <div>
        <CommentSection />;
      </div>
    
  </div>
  )
}
export default PostContainer;
// ☞ 844fa9fb-2a20-4071-aeb5-a620a0d95ebd
