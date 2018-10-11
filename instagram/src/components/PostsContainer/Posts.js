import React from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import CommentSection from '../CommentSection/CommentSectionContainer';
import CommentForm from '../CommentSection/CommentForm';

const Post = props => {
  const { username, thumbnailUrl, imageUrl, likes, comments, } = props.post;
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

      <CommentSection comments={comments} />

      <CommentForm />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    post: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;