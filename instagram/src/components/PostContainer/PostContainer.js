import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import Post from "../Post/Post.js";

class PostContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      thumbnailUrl: props.thumbnail,
      username: props.username,
      imageUrl: props.imageUrl,
      likes: props.likes
    };
  }

  clickHandler = event => {
    event.preventDefault();
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  };
  render() {
    return (
      <div className="card">
        <Post
          thumbnail={this.state.thumbnailUrl}
          username={this.state.username}
          imageUrl={this.state.imageUrl}
          likes={this.state.likes}
          clickHandler={this.state.clickHandler}
        />
        <CommentSection comments={this.props.comments} time={this.props.time} />
      </div>
    );
  }
}

export default PostContainer;
