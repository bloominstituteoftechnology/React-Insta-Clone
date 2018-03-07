import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";

export default class PostContainer extends Component {
  render() {
    console.log("Post Container props", this.props.data.comments);
    return (
      <div>
        Post Container Loaded
        {<CommentSection comments={this.props.data.comments} />}
      </div>
    );
  }
}
