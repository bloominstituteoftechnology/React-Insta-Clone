import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './PostStyles.css';
import PropTypes from 'prop-types';

const Post = props => {
  // console.log(props)
    return (
      <div className="post-border">
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={props.post.imageUrl}
          />
        </div>
        <CommentSection comments={props.post.comments} />
      </div>
    );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
}

export default Post
