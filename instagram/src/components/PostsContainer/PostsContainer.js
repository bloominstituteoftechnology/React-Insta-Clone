import React from 'react';
import PropTypes from "prop-types";
import './PostsContainer.css';
import Post from './Post';

const PostContainer = props => {
  return (
    <div className="posts-container">
      {props.posts.map(post => <Post post={post}
                                     key={post.imageUrl} />)}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
