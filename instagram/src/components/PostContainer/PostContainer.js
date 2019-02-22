import React from "react";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";

import { Card, CardImg } from "reactstrap";

import "../PostContainer/postcontainer.css";

const PostContainer = props => {
  const { comments, imageUrl, username, likes, thumbnailUrl } = props.postInfo;
  return (
    <div className="post">
      <Card className="customCard">
        <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
        <CardImg src={imageUrl} alt="post" className="cardImg" />
        <CommentSection comments={comments} likes={likes} />
      </Card>
    </div>
  );
};

PostContainer.propTypes = {
  postInfo: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default PostContainer;
