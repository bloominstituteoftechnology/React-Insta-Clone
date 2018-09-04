import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

class Post extends React.Component {
  state = {
    likes: this.props.post.likes
    // TODO: add more to state
  };

  // DAY 2 MVP goal
  like = () => {
    // create a variable to hold likes + 1
    let likes = this.state.likes + 1;
    // TODO: refactor likes so that i can change heart if liked

    // set the state to the new likes count
    this.setState({ likes });
  };

  render() {
    return (
      <div className="post-wrapper">
        <div className="post-header-wrapper">
          <img src={this.props.post.thumbnailUrl} alt={"Profile thumb."} />
          <div className="username">{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} alt={"post"} />
        <div className="post-icon-and-comments-wrapper">
          <div className="post-icons-wrapper">
            <i className="far fa-heart" onClick={this.like} />
            <i className="far fa-comment" />
          </div>
          <p>{this.state.likes} likes</p>
          <CommentSection post={this.props.post} />
        </div>
      </div>
    );
  }
}

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
