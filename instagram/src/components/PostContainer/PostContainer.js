import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import Post from "../Post/Post.js";

class PostContainer extends Component {
  render() {
    return (
      <>
        <Post
          thumbnail={this.props.thumbnail}
          username={this.props.username}
          imageUrl={this.props.imageUrl}
          likes={this.props.likes}
        />
        {/* <CommentSection comments={this.props.comments} /> */}
        <div>{this.props.time}</div>
        <div className="add-comment">Add a comment...</div>
      </>
    );
  }
}

export default PostContainer;
