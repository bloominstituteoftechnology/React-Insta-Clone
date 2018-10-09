import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css';


const PostContainer = props => (
  <div className='post-container'>
    <div className="user-information">
      <img src={props.post.thumbnailUrl} alt="thumbnail" className="user-thumbnail" />
      <p>{props.post.username}</p>
    </div>
    <img src={props.post.imageUrl} alt="Post" className="post-image" />
    <CommentSection comments={props.post.comments} />
  </div>
);

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};



export default PostContainer;