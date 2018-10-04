import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <>
        <div className="profile">
          <img src={this.props.thumbnail} alt="" />
          <p>{this.props.username}</p>
        </div>
        <div className="picture">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className="icons">
          <p>heart</p>
          <p>commentbubble</p>
        </div>
        <p>{this.props.likes} likes</p>
      </>
    );
  }
}

export default Post;
