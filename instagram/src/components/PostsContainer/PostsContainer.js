import React from 'react';
import PropTypes from "prop-types";
import uuid from 'uuid/v1';
import './PostsContainer.css';
import Post from './Post';

const PostContainer = props => {
  return (
    <div className="posts-container">
      {props.posts.map(post => <Post key={uuid()} post={post} />)}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
