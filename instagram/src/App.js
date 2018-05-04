import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
// import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-wrapper">
          <PostContainer />
        </div>


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instagram Clone App</h1>
        </header> */}

        {/* <CommentSection /> */}
      </div>
    );
  }
}

export default App;
