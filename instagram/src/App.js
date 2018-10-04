import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchBar />
        {dummyData.map(post => 
          <>
          <PostContainer post={post} />
          </>
          )}
      </div>
    );
  }
}

export default App;
