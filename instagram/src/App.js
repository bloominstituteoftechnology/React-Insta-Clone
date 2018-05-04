import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={};
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer instaPost={dummyData} />
      </div>
    );
  }
}

export default App;
