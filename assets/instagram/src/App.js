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
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
