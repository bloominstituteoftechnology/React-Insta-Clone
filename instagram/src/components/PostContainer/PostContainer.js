import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="Post-container">
      {props.posts.map(post =>
        <div key={post.timestamp}>
          <Post post={post} />
          <CommentSection comments={post.comments} />
          <p>{post.timestamp}</p>
        </div>
      )}
    </div>
  )
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
