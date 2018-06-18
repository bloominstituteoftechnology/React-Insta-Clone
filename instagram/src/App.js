import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

//components
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="container">
          <PostContainer />
          {this.state.appData.map(post => (
            <div key={post.id}>Name: {post.username}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
