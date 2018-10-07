import React from "react";
import "./PostContainer.css";
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.data.map((post, i) => 
          
        <div key={i} className="card">
          <div className="card-header">
            <img
              src={post.thumbnailUrl}
              className="thumbnail"
              alt={post.username}
            />
            <h3>{post.username}</h3>
          </div>
          <img src={post.imageUrl} alt="post" className='post-img' />
          <div className='card-comments'>
            <CommentSection post={post}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostContainer;
