import React, { Component } from 'react';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentsData: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        
        <SearchBar />
        <div > 
          <PostContainer passedState = {this.state.commentsData} />
        </div>
      </div>
    );
  }
}

export default App;
