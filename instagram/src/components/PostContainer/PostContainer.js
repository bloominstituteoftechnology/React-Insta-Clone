import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import "./PostContainer.css";
import Post from "../Post/Post";

class PostsContainer extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    {
      console.log(this.props.post);
    }
    return (
      <div className="posts-container">
        {this.props.posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default PostsContainer;
