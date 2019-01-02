import React, { Component } from "react";
import "./App.css";
import CommentSection from "./components/CommentSection/CommentSection.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

class App extends Component {
  render() {
    return <SearchBar />;
  }
}

export default App;