import React, { Component } from 'react';
import './App.css';

// data
import dummyData from './dummy-data';

// components
import { SearchBarContainer } from './components/SearchBar/SearchBarContainer';
import { PostContainer } from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer />

        <PostContainer />
      </div>
    );
  }
}

export default App;
