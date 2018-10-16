import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    }
  }

  render() {
  return (
    <div className="post-border">
      <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={this.props.post.imageUrl}
        />
      </div>
      <CommentSection comments={this.props.post.comments} />
    </div>
  );
};
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
