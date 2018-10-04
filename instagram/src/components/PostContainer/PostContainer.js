import React from 'react';
import "./PostContainer.css";
import CommentSection from  '../CommentSection/CommentSection';



const PostContainer = () => {
  return <div>
    <h2>PostContainer</h2>
    <div className="PostContent">

    </div>
    <div>
      <CommentSection />;
    </div>
    
  </div>
}
export default PostContainer;