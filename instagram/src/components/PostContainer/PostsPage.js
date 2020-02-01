import React from 'react';
import PostCard from './PostCard';
import PropTypes from 'prop-types';

function PostsPage(props) {
  return (
    <div className="feed-container">
    	{props.posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

PostsPage.propTypes = {
  post: PropTypes.object
};


export default PostsPage;