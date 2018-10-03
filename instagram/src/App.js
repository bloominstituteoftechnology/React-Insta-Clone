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
        <PostContainer dummyData={this.state.dummyData} />
      </>
    );
  }
}

export default App;
