import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js"
import './App.css';



class App extends Component {
  constructor() {
    super();
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
