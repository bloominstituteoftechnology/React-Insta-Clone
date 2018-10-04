import React, { Component } from "react";
import "./postcontainer.css";
import Post from "../Post/Post.js";

class PostContainer extends Component {
    render() {
      return (
        <div>
          <Post
            thumbnail={this.props.thumbnail}
            username={this.props.username}
            imageUrl={this.props.imageUrl}
            likes={this.props.likes}
          />
        </div>
      );
    }
  }
  
  export default PostContainer;