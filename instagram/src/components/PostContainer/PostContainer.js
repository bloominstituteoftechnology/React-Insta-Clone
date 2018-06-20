import React from "react";
import "./PostContainer.css";
import CommentSection from "./CommentSection/CommentSection";
import PropTypes from "prop-types";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleCommentInput = this.withIdArgument(props.handleCommentInput);
    this.addComment = this.withIdArgument(props.addComment);
    this.handleLike = this.withIdArgument(props.handleLike);
  }

  withIdArgument(f) {
    let id = this.props.post.id;
    return function(event) {
      f(event, id);
    }
  }

  render() {
    return (
      <div className="post-container">
        <div className="post-header">
          <div className="user-thumbnail">
            <img
              src={this.props.post.thumbnailUrl}
              alt={this.props.post.username + " thumbnail"}
            />
          </div>
          <div className="user-name">
            <h3>{this.props.post.username}</h3>
          </div>
        </div>
        <div className="main-img">
          <img src={this.props.post.imageUrl} alt="main post image" />
        </div>
        <div className="main-content">
          <div className="icon-strip">
            <div className="left-icons">
              <div className="heart-icon post-icon" onClick={this.handleLike}>
                <i
                  className={
                    this.props.post.userHasLiked ? "fas fa-heart" : "far fa-heart"
                  }
                />
              </div>
              <div className="speech-icon post-icon">
                <i className="far fa-comment" />
              </div>
            </div>
            <div className="right-icons">
              <div className="bookmark-icon post-icon">
                <i className="far fa-bookmark" />
              </div>
            </div>
          </div>
          <div className="likes-strip">
            <h3>
              {"" +
                this.props.post.likes +
                (this.props.post.likes > 1 ? " likes" : " like")}
            </h3>
          </div>
          <CommentSection comments={this.props.post.comments} />
          <div className="time-stamp">
            <p>{this.props.post.timestamp}</p>
          </div>
            <form className="comment-input-section" onSubmit={this.addComment}>
            <input
              type="text"
              className="new-comment"
              placeholder="Add a comment..."
              onChange={this.handleCommentInput}
              value={this.props.post.commentInput}
            />
            <div className="comment-input-hamburger">
              <i className="fas fa-ellipsis-h" />
          </div>
            </form>
            

        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default PostContainer;
