import React from "react";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      insta_posts: [],
    };
  }
  componentDidMount() {
    this.setState({insta_posts:dummyData});
  }
  render() {
    return <PostContainer posts={this.state.insta_posts} />;
  }
}

export default PostsPage;
