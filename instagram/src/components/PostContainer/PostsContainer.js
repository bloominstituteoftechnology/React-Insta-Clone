import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";
import './Posts.css';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default PostsContainer;