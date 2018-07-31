import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

const Post = (props) => {
  return (
      <div>
        <p className="post-header"> <img className="profile-pic" src={props.post.thumbnailUrl} alt='Profile' /> {props.post.username}</p>
        <img src={props.post.imageUrl} alt='Posted' />
        <p>{props.post.likes} likes</p>
        <p>Posted {props.post.timestamp}</p>
      </div>
    );
}

Post.propTypes = {
  post: PropTypes.shape({
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};
export default Post;
