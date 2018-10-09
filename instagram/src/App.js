import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="Posts">
          {this.state.data.map((post, idx) => (
            <PostContainer key={idx} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
