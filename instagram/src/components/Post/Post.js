import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="profile">
          <img src={this.props.thumbnail} alt="" />
          <p>{this.props.username}</p>
        </div>
        <div className="picture">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className="icons">
          <i class="far fa-heart" />
          <i class="far fa-comment" />
        </div>
        <p className="likes">{this.props.likes} likes</p>
      </div>
    );
  }
}

export default Post;
