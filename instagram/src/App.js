import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'

import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        {dummyData.map((post) => {
          return (
            <PostContainer key={post.thumbnailUrl} post={post} />
          );
        })}
      </div>
    );
  }
}

export default App;
