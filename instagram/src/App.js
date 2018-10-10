import React, { Component } from "react";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsPage from "./components/PostContainer/PostsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      newSearch: "",
      filtered: false
    };
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
