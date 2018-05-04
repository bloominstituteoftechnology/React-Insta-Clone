import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data.js';



class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
