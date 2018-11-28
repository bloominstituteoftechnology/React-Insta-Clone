import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import dummyData from "./dummy-data";
import SearchContainer from "./components/SearchBar/SearchContainer";
import PostContainer from "./components/PostContainer/PostContainer";
import Comments from "./components/CommentSection/Comments";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div>
        <SearchContainer />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}
export default App;
