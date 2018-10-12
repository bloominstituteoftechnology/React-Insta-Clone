import React from 'react';
import propTypes from 'prop-types';
import Post from './Post'


const PostContainer = props => {
    return (
      <div className="postContainer">
        {props.posts.map(post => <Post key={post.timestamp} value={post} />)}
      </div>
    );
  };

PostContainer.propTypes = {
    posts: propTypes.arrayOf(propTypes.object)
}

export default PostContainer;