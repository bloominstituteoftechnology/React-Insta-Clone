import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostList from "./Components/PostContainer/PostList";

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
    console.log(this.state.posts);
    return (
      <div className="App">
        <SearchBar />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
