import React from 'react';
import Post from './Post';
import  CommentsSection from '../CommentsSection/CommentsSection.js';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <div className="post-container">
          <Post post = {props.post} />
          <CommentsSection commentsArray= {props.comments} />
        </div>
      );
}

PostContainer.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
}
export default PostContainer;
