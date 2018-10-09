import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PropTypes from 'prop-types';

import './PostList.css';


const PostList = props => (
  <div className='post-list'>
    {props.posts.map(post => <PostContainer post={post} key={post.timestamp} addCommentHandler={props.addCommentHandler} addLikeHandler={props.addLikeHandler} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default PostList;