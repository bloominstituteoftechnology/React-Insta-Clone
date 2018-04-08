import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import { PostContainer } from './components/PostContainer/PostContainer.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="SearchBarContainer"><SearchBar /></div>
        {[...dummyData].map( (post, index) => (<PostContainer userPost={post} key={post.username + index} />))}
      </div>
    );
  }
}

export default App;
