import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PostInfo from "./PostInfo";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      comment: "",
      id: this.props.post.imageUrl,
      likes: this.props.post.likes
    };
  }

  handleChange = ev => {
    this.setState({
      comment: ev.target.value
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
    e.preventDefault();
    this.setState({ likes: this.props.post.likes + 1 });
    this.props.like(this.state.likes, this.props.post.timestamp);
  };

  focus = e => {};

  render() {
    return (
      <div className="post-container">
        <PostHeader info={this.props.post} />
        <PostImage src={this.props.post.imageUrl} />
        <div className="lower-content">
          <PostInfo info={this.props.post} like={this.handlelike} />
          <CommentSection
            post={this.props.post}
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
