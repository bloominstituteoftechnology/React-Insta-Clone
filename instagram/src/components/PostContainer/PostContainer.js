import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ""
    };
  }

  handleChange = ev => {
    this.setState({
      newComment: ev.target.value
    });
  };

  handleComment = e => {
    e.preventDefault();
    if (this.state.newComment) {
      this.props.addComment(this.state.newComment, this.props.post.timestamp);
      this.setState({ newComment: "" });
    }
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-header">
          <div className="thumbnail-container">
            <img
              src={this.props.post.thumbnailUrl}
              alt="profile thumbnail"
              className="header-thumbnail"
            />
          </div>
          <h2 className="bold">{this.props.post.username}</h2>
        </div>
        <img
          src={this.props.post.imageUrl}
          alt="full-size post"
          className="post-img"
        />
        <div className="lower-content">
          <div className="action-buttons">
            <FontAwesomeIcon
              icon={["far", "heart"]}
              size="2x"
              className="icon"
            />
            <FontAwesomeIcon
              className="icon"
              icon={["far", "comment"]}
              flip="horizontal"
              size="2x"
            />
          </div>
          <div className="likes">
            <p className="bold">{this.props.post.likes} likes</p>
          </div>
          <CommentSection
            comments={this.props.post.comments}
            time={this.props.post.timestamp}
            comment={this.state.newComment}
            handleChange={this.handleChange}
            addComment={this.handleComment}
            moop={this.input}
          />
        </div>
      </div>
    );
  }
}

export default PostContainer;
