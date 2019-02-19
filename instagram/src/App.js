import React, { Component } from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import "./css/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: dummyData };
  }

  changeHandler = id => {
    console.log(id);
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <SearchBar changeHandler={this.changeHandler} />
        </header>
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
