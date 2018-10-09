import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";

import "./PostContainerStyle.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  uplike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="postBorder">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />

        <div className="postImageContainer">
          <img
            className="postImage"
            alt="TheThumbnail"
            src={this.props.post.imageUrl}
          />
        </div>
        <CommentSection
          comments={this.props.post.comments}
          postId={this.props.post.imageUrl}
        />
        <LikeSection uplike={this.uplike} likes={this.state.likes} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
