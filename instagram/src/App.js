import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
// import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  render() {
    return (
      <div className='body'>
        <SearchBar />
        {/* <PostContainer /> */}
      </div>
    );
  }
}

export default App;
