import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PropTypes from 'prop-types';

import './PostList.css';


const PostList = props => {
  if (!props.posts.length) {
    return <div>Loading ...</div>
  } else {
    return (
      <div className='post-list'>
        {props.posts.map(post =>
          <PostContainer
            post={post}
            key={post.timestamp}
            addCommentHandler={props.addCommentHandler}
            addLikeHandler={props.addLikeHandler}
            newComment={props.newComment}
            inputEventHandler={props.inputEventHandler}
          />)}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default PostList;