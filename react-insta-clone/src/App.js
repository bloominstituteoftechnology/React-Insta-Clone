import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./PostContainer.js";
import Search from "./Search"
import CommentSection from "./CommentSection"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Search />
        <PostContainer dummyData={dummyData} />
        <CommentSection />
      </div>
    );
  }
}

export default App;
