import React from "react";
import "../PostContainer/PostContainer.css";
import Post from "../Post/Post";

class PostContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.dummyData.map(post => {
          return <Post key={post.username} post={post} />;
        })}
      </div>
    );
  }
}

export default PostContainer;