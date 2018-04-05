import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data.js';
import { PostContainer } from './components/PostContainer/PostContainer.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [...dummyData]
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map( (post, index) => (<PostContainer userPost={post} key={post.username + index} />))}
      </div>
    );
  }
}

export default App;
