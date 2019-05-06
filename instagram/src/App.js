import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";

import "./App.css";

import dummyData from "./dummy-data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
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
