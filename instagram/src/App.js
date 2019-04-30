import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Component/SearchBar/search-bar";
import Post from "./Component/PostContainer/Post";
import dummyData from './dummy-data'

  

class App extends Component {
  
  render() {
    return (
      <div>
      <SearchBar/>
      <Post data={dummyData}/>
      </div>
    )
  }
}

export default App;
