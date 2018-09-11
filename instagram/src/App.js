import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
// import PostContainer from "components/PostContainer";
import dummyData from "./dummy-data";
import Post from "./components/PostContainer/Post";

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* <PostContainer /> */}
        <Post />
      </div>
    );
  }
}

export default App;
