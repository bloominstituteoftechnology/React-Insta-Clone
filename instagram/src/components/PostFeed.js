import React from 'react';
import PostCard from './PostContainer/PostCard';

function FeedContainer(props) {
  return (
    <div className="feed-container">
    	{props.posts.map(post => <PostCard key={post.id} parameters={post.parameters} />)}
    </div>
  );
}

export default FeedContainer;