import React, { Component } from "react";

import Header from "./instagram/SearchBar/Header";
import PostContainer from "./instagram/PostContainer/PostContainer";
import Post from "./instagram/PostContainer/Post";
import Comments from "./instagram/CommentSection/Comments";
import dummyData from "./instagram/PostContainer/dummy-data";
import PostsPage from "./instagram/PostContainer/PostsPage";

class App extends Component {
  state = {};
  render() {
    return <PostsPage />;
  }
}

export default App;
