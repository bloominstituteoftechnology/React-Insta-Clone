import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./Components/SearchBar/SearchBar.js";
import PostContainer from "./Components/PostContainer/PostContainer.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer data={dummyData} />
      </div>
    );
  }
}

export default App;
