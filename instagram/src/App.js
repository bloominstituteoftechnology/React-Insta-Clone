import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-wrapper">
          <PostContainer />
          {/* <Post /> */}
        </div>
      </div>
    );
  }
}

export default App;
