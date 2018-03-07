import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";

export default class PostContainer extends Component {
  render() {
    console.log("Post Container props", this.props.data.comments);
    return (
      <div className="post-container container-fluid">
        <div className="row">
          {
            <img
              className="thumbnail"
              src={this.props.data.thumbnailUrl}
              alt="Thumbnail"
            />
          }
          <div>{this.props.data.username}</div>
        </div>
        {
          <img
            className="img-fluid"
            src={this.props.data.imageUrl}
            alt="Post"
          />
        }
        <div>{<CommentSection comments={this.props.data.comments} />}</div>
      </div>
    );
  }
}
