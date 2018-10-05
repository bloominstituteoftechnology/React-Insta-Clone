import React, { Component } from 'react';
import data from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Heloooo</h1>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
