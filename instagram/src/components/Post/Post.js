import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import "./Post.css";

class Post extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    {
      console.log(this.props.post.imageUrl);
    }
    return (
      <div className="post">
        <div className="username-container">
          <img
            className="username-thumbnail"
            src={this.props.post.thumbnailUrl}
            alt="post thumbnail"
          />
          <p className="username">{this.props.post.username}</p>
        </div>
        <img
          className="post-image"
          src={this.props.post.imageUrl}
          alt="post image"
        />
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  }
}

export default Post;
