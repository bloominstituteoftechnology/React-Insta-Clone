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
            </div>
          );
        })}
      </div>
    );
  }
}
export default PostContainer;
