import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import "./Post.css";

class Post extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    {
      console.log(this.props.post);
    }
    return (
      <div className="post">
        <h1>Username: {this.props.post.username}</h1>
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  }
}

export default Post;
