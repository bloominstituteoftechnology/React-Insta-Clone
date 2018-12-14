import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './components/dummy-data'
import PostContainer from './components/PostContainer'

import SearchBar from './components/SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = dummyData;
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, World</h1>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
