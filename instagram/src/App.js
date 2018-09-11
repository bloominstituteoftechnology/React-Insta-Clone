import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
// import PostContainer from "components/PostContainer";
import dummyData from "./dummy-data";

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
      </div>
    );
  }
}

export default App;
