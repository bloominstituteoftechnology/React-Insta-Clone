import React, { Component } from "react";
import Posts from "./Posts";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends Component {
  render() {
    return (
      <div>
        {this.props.dummyData.map(x => (
          <div>
            <Posts
              key={x.timestamp}
              username={x.username}
              imageUrl={x.imageUrl}
              thumbnailUrl={x.thumbnailUrl}
              likes={x.likes}
            />
            <CommentSection key={x.timestamp} comments={x.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
