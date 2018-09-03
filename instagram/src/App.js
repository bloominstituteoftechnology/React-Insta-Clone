import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      inputText: ""
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        {this.state.posts.map(post => (
          <PostContainer post={post} key={post.timestamp} />
        ))}
      </div>
    );
  }
}

export default App;
