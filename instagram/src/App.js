import React, { Component } from 'react';
import './css/App.css';
import { SearchBar } from './components/SearchBar'
import PostContainer from './components/PostContainer'
import postData from './application-data.js'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer postData={postData} />
      </div>
    );
  }
}

export default App;
