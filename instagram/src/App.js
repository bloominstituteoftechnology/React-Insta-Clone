import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }

  render() {
    return (
      <div className="App container">
        <SearchBar />
        {this.state.postData.map(post => (
          <PostContainer post={post} key={Math.random()} />
        ))}
      </div>
    );
  }
}

export default App;
