import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

const Post = props => {
  const { username, thumbnailUrl, imageUrl, likes } = props.post;
  return (
    <div className="Post">
      <header className="Post-header">
        <img src={thumbnailUrl} alt="user thumbnail" />
        <h2>{username}</h2>
      </header>
      <section className="Post-body">
        <img src={imageUrl} alt="post img" />
        <div className="Post-action">
          <i className="far fa-heart fa-2x icon"></i>
          <i className="far fa-comment fa-2x icon"></i>
        </div>
        <p>{likes} likes</p>
      </section>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  })
};

export default Post;
