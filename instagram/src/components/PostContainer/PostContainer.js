import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
      <div>
        <img src={this.props.thumbnailUrl} alt="thumbnail" />
        <h3>{this.props.username}</h3>
        <img alt="post" src={this.props.imageUrl} />
        <p>{this.props.likes} likes</p>
      </div>
    );
  }
}

export default Posts;
