import React from "react";
import Post from "./Post";
import CommentSection from "./../CommentSection/CommentSection";

import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.key,
      userData: props.userData,
      likes: props.userData.likes
    };
  }

  addLike = event => {
    event.preventDefault();
    let newLikes = this.state.likes + 1;
    this.setState({
      likes: newLikes
    });
  };

  render() {
    return (
      <div className="post-container">
        <Post
          user={this.state.userData}
          addLike={this.addLike}
          likes={this.state.likes}
        />
        <CommentSection user={this.state.userData} />
      </div>
    );
  }
}

export default PostContainer;
