import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-div">
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
