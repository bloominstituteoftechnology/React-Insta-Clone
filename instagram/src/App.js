import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="container">
      <header><SearchBar /></header>
      <div className="posts">
          <PostContainer />
      </div>
      </div>
    );
  }
}

export default App;
