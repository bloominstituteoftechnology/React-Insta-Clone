import React, { Component } from 'react';
import SearchBarContainer from './components/Search/SearchBarContainer';
import PostContainer from './components/Post/PostContainer';
import './App.css';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer data={dummyData} />
      </div>
    );
  }
}

export default App;
