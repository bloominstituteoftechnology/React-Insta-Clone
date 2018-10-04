import React, { Component } from "react";
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";
import dummyData from "./dummy-data"

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    }
  }
  render() {
    return (
      <>
        <SearchBar />
        {this.state.dummyData.map(post => {
          return (
            <PostContainer key={post.username} post={post} />
          )})
        }
      </>
    );
  }
}

export default App;