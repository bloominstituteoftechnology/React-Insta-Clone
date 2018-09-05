import React from 'react';
import PropTypes from 'prop-types';
import Post from './post';
import './post-container.css';

function PostContainer(props) {
  return(
    <div className='post-container'>
      {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
    </div>
  );
};

PostContainer.PropTypes = {
  post: PropTypes.array
};



export default PostContainer;