import React, { Component } from 'react';
import './App.css';
// import SearchBar from './SearchBar';
import PostContainer from './PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SearchBar /> */}
        <PostContainer />
      </div>
    );
  }
}

export default App;
