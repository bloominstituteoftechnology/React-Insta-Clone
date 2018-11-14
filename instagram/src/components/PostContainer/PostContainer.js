import React from 'react';
import './PostContainer.css';
import PostCard from './PostCard';

const PostContainer = props => {
  
  return (
    <div className="post-container">
      {props.data.map((user, i) => {
        // console.log("USER", user);
        
        return (
          <PostCard
            data={user}
            post={user}
            key={user.thumbnailUrl}
          />
        )
      })}
    </div>
  )
}

export default PostContainer