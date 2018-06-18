import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
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
          {this.state.appData.map(post => (
            <PostContainer
              key={post.banana}
              username={post.username}
              thumbnail={post.thumbnailUrl}
              image={post.imageUrl}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
          {/* {this.state.appData.map(post => (
            <div key={post.id}>Name: {post.username}</div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default App;
