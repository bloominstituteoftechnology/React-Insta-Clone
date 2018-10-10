import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostContainer from "./PostContainer/PostContainer";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";
import PostPage from './PostContainer/PostPage'
class App extends Component {
  constructor(props) {
    super();
  }

  
  render() {
    return (
      <div className="App">
          <PostPage />
      </div>
    );
  }
}

export default App;
