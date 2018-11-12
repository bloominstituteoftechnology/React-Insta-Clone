import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
      likes: this.props.post.likes
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

  handleLike = e => {
    console.log(e.target);
    e.preventDefault();
    this.setState({ likes: this.props.post.likes + 1 });
    this.props.like(this.state.likes, this.props.post.timestamp);
  };

  focus = e => {};

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
              onClick={this.handleLike}
            />
            <FontAwesomeIcon
              className="icon"
              icon={["far", "comment"]}
              flip="horizontal"
              size="2x"
              onClick={this.focus}
            />
          </div>
          <div className="likes">
            <p className="bold">{this.state.likes} likes</p>
          </div>
          <CommentSection
            comments={this.props.post.comments}
            time={this.props.post.timestamp}
            comment={this.state.newComment}
            handleChange={this.handleChange}
            addComment={this.handleComment}
          />
        </div>
      </div>
    );
  }
}

export default PostContainer;
