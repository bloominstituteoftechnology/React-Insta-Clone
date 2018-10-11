import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: []
      // filterTarget: "hello"
    };
  }

  // component did mount set state
  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  render() {
    let filteredPosts = this.state.posts.filter(post =>
      post.username.includes(this.props.filterTarget)
    );
    return (
      <div>
        {filteredPosts.map((post, i) => (
          <PostContainer key={post.timestamp} post={post} />
        ))}
      </div>
    );
  }
}

export default PostsPage;
