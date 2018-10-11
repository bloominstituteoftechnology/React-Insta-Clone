import React from "react";
import Post from "./Post";
import CommentSection from "./../CommentSection/CommentSection";

import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: props.userData,
      likes: props.userData.likes
    };
    // this.hydrateState = props.hydrateState;
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
        <CommentSection
          user={this.state.userData}
          // saveState={this.props.saveState}
          // hydrateState={this.props.hydrateState}
        />
      </div>
    );
  }
}

export default PostContainer;