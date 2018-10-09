import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBarContent/SearchBar";
import PostContainer from "./components/PostContent/PostContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-header">
          <SearchBar />
        </div>
        <PostContainer />
      </div>
    );
  }
}

export default App;
