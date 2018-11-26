import React from 'react';
import PostCard from './PostContainer/PostCard';
import PropTypes from 'prop-types';

function FeedContainer(props) {
  return (
    <div className="feed-container">
    	{props.posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

FeedContainer.propTypes = {
  post: PropTypes.object
};


export default FeedContainer;