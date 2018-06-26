import React, { Component } from "react";
import "./App.css";
import instagram from "./InstagramData";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBarContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: instagram
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.post.username} />
        {this.state.instagram.posts}(post =>
      </div>
    );
  }
}

export default PostContainer;
