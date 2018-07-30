import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = dummyData;
  }
  render() {
    return (
      <div>
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
