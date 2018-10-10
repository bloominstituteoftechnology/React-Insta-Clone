import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./PostsContainer.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    // Likes is taking the number of like in the post
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    // incrementLike is creating an incrementing the likes by one then alter the likes in the state
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div className="post-box">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div>
          <img
            alt="post thumbnail"
            className="main-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
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
