import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="brand">
            <span className="brand__logo">
              <i className="fas fa-camera-retro" />
            </span>
            <span className="brand__line">│</span>
            <span className="brand__title">Instaclone</span>
          </div>
          <SearchBar />
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </header>
        <PostContainer posts={dummyData} />
      </div>
    );
  }
}

export default App;
