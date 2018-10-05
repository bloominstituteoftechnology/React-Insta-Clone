import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer  />
        <PostContainer />
      </div>
    );
  }
}

export default App;
