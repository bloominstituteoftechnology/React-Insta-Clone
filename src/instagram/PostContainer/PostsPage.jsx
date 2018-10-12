import React, { Component } from "react";

import Header from "../SearchBar/Header";
import PostContainer from "./PostContainer";
import Post from "./Post";
import Comments from "../CommentSection/Comments";
import dummyData from "./dummy-data";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.nickname.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="PostsPage">
        <Header
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
          logoutHandler={this.props.logoutHandler}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
