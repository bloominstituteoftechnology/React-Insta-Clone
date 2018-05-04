import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
