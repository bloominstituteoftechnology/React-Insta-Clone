import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./data/dummy-data";

class App extends Component {
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
        <div className={"content"}>
          {this.state.posts.map(post => {
            return (
              <PostContainer
                data={post}
                key={post.timestamp}
                className="post-container"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
