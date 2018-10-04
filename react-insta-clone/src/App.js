import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'

import PostContainer from './components/CommentSection/CommentSection'

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          {console.log(dummyData)}
        </header>
        <div className="post">
          <PostContainer className='post-container' />
        </div>
      </div>
    );
  }
}

export default App;
