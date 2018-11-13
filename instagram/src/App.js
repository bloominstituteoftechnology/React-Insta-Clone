import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post-container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
      <h1>Instagram Clone</h1>
      <PostContainer dummyData = {this.state.dummyData} />
      </div>
    );
  }
}

export default App;
