import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div >
    );
  }
}

export default App;
