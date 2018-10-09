import React, { Component } from 'react';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App">
      <PostContainer />
      </div>
    );
  }
}

export default App;
