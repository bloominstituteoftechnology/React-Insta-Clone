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
      <div className="App">
        <header className="search-bar">
          <SearchBar changeHandler={this.changeHandler} />
        </header>
        <div className="posts">
          {this.state.data.map(post => (
            <PostContainer
              key={post.timestamp}
              post={post}
              className="post-container"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
