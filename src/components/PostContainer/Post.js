import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const Post = props => {
  return (
    <div class="post">
      <div class="post-header">
        <img src={props.post.thumbnailUrl} />
        <h2>{props.post.username}</h2>
      </div>
      <img src={props.post.imageUrl} />
      <div class="feedback-buttons">
        <img src="http://www.pngonly.com/wp-content/uploads/2017/06/Instagram-Heart-PNG-Transparent-210x210.png" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1lu3jW04eocmGDkdSeUalJOYvdShSIWPinb3UeIoH6wnIsb8" />
      </div>
      <p>{props.post.likes}</p>
      <CommentSection post={props.post} addNewComment={props.addNewComment} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;
