import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar.js'; 
import PostContainer from './Components/PostContainer/PostContainer.js'; 


class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar/> 
      <PostContainer dummyData={dummyData} /> 
      </div>
    );
  }
}

export default App;
