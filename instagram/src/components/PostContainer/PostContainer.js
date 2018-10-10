import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

class PostContainer extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div className="outerPostContainer">
        <div className="postContainer">
          {this.props.data.map(post => {
            return (
              <div className="post">
                <div className="header">
                  <img
                    className="thumbnail"
                    src={post.thumbnailUrl}
                    alt="thumbnail"
                  />
                  <p className="username">{post.username}</p>
                </div>
                <div className="imageContainer">
                  <img className="postImage" src={post.imageUrl} alt="post" />
                </div>
                <CommentSection comments={post.comments} likes={post.likes} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostContainer;
