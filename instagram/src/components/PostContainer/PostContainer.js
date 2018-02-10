import React, { Component } from "react";
import Comment from "../CommentSection/CommentSection";
import dummyData from "../../dummy-data";

class PostContainer extends Component {
  state = {
    dummyData
  };

  render() {
    return (
      <div>
        {this.state.dummyData.map(post => {
          return (
            <div>
              <div>
                <div>
                  <img src={post.thumbnailUrl} />
                  <a href="#">{post.username}</a>
                </div>
                <img src={post.imageUrl} />
                <div>
                  <img src="/heart" />
                </div>
                <p className="like-count">{post.likes} likes</p>
              </div>
              <div>
                {post.comments.map(comment => {
                  return <Comment key={comment.username} comment={comment} />;
                })}
              </div>
              <p className="posted-time">{post.timestamp}</p>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="title" />
                <input
                  placeholder="Add a comment..."
                  type="text"
                  //value={}
                  onChange={this.handleCommentChange}
                />
                <button type="submit">Add Movie</button>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}
export default PostContainer;
