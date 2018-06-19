import React from "react";
import "./PostContainer.css";
import CommentSection from "./CommentSection/CommentSection";
import PropTypes from "prop-types";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      comments: props.post.comments
    };
    this.handleInput = this.handleInput.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleCommentKeyPress = this.handleCommentKeyPress.bind(this);
  }

  handleInput(event) {
    let value = event.target.value;
    this.setState({ commentInput: value });
  }

  handleCommentKeyPress(event) {
    if (event.key === "Enter") {
      this.addComment();
    }
  }

  addComment() {
    let text = this.state.commentInput;
    if (text.length !== 0) {
      let newComment = {
        text: text,
        username: this.props.post.username
      };
      let newComments = this.state.comments.concat([newComment])
      this.setState({
        commentInput: "",
        comments: newComments
      });
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
              <div className="heart-icon post-icon">
                <i className="far fa-heart" />
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
          <CommentSection comments={this.state.comments} />
          <div className="time-stamp">
            <p>{this.props.post.timestamp}</p>
          </div>
          <div className="comment-input-section">
            <input
              type="text"
              className="new-comment"
              placeholder="Add a comment..."
              onChange={this.handleInput}
              onKeyPress={this.handleCommentKeyPress}
              value={this.state.commentInput}
            />
            <div className="comment-input-hamburger" onClick={this.addComment}>
              <i className="fas fa-ellipsis-h" />
            </div>
          </div>
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
