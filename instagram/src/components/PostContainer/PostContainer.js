import React, { Component } from "react";
import Posts from "./Posts";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends Component {
  render() {
    return (
      <div>
        {this.props.dummyData.map(x => (
          <div className="posts">
            <Posts
              key={x.timestamp}
              username={x.username}
              imageUrl={x.imageUrl}
              thumbnailUrl={x.thumbnailUrl}
            />
            <CommentSection
              key={x.timestamp}
              comments={x.comments}
              likes={x.likes}
              timestamp={x.timestamp}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default PostContainer;
