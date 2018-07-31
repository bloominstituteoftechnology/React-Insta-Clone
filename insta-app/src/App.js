import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Components.css";
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
      <div className="app-container">
        <div>
          <SearchBar />
        </div>
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
