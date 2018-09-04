import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
       Instagram
       <SearchBar />
       <PostContainer/>
      </div>
    );
  }
}

export default App;
