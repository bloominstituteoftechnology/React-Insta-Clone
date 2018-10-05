import React from "react";
import "../PostContainer/PostContainer.css";
import Post from "../Post/Post";

class PostContainer extends React.Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"contentContainer"}>
          {this.props.dummyData.map(post => {
            return (
              <Post
                key={post.username}
                post={post}
                dummyData={this.props.dummyData}
                commentInput={this.props.commentInput}
                comment={this.props.comment}
                user={this.props.user}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostContainer;
