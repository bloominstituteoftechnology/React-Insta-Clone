import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

class App extends Component {
  constructor() {
    super();
    this.state = { dummyData };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={dummyData} />
      </div>
    );
  }
}

export default App;
