import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostContainer.css';

const PostContainer = (props) => {
  return (
    <div className="PostContainer">
      {props.posts.map(post =>
        <Post key={post.username + ': ' + post.timestamp}
              post={post} />
      )}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;