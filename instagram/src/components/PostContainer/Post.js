import React from 'react';
import PropTypes from 'prop-types';
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