import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div>          
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
