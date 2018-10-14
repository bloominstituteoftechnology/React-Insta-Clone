import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import PropTypes from 'prop-types';

const Post = props => {
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
  postObject: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired
  })

}


export default Post;
