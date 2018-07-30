import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {data:dummyData};
  }
  render() {
    return (
      <div className="container">
          <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
