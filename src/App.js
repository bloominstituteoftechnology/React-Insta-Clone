import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBarContainer from './components/SearchBarComp/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    }
  }
  render() {
    return (
      <div className="main-container">
        <SearchBarContainer />
        <PostsContainer postInfo={item}/>
      </div>
    );
  }
}

export default App;
