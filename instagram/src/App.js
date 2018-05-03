import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer /> 
      </div>
    );
  }
}

export default App;
