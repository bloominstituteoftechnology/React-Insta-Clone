import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.thumbnail} alt="" />
          <p>{this.props.username}</p>
        </div>
        <div>
          <img src={this.props.imageUrl} alt="" />
        </div>
       
        <p>{this.props.likes} likes</p>
      </div>
    );
  }
}

export default Post;