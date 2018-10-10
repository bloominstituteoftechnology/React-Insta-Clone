import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  // component did mount set state
  componentDidMount() {
    console.log(this.state);
    this.setState({
      posts: dummyData
    });
  }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        {posts.map((post, i) => (
          <PostContainer key={post.timestamp} post={post} />
        ))}
      </div>
    );
  }
}

export default PostsPage;
