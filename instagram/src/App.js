import React, { Component } from "react";
import "./App.css";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <>
        <SearchBar />
        {this.state.data.map(post => {
          return (
            <PostContainer
              thumbnail={post.thumbnailUrl}
              username={post.username}
              imageUrl={post.imageUrl}
              likes={post.likes}
              time={post.timestamp}
              data={this.state.data}
              comments={this.state.data.comments}
            />
          );
        })}
      </>
    );
  }
}

export default App;
