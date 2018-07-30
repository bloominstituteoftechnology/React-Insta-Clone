import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  return (
    <div>
      <div>{props.data.username}</div>
      <img src={props.data.thumbnailUrl} />
      <img src={props.data.imageUrl} />
      <div>{props.data.likes}</div>
      <div>{props.data.timestamp}</div>
      <CommentSection com={props.data.comments} />
    </div>
  );
};
Post.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

export default Post;
