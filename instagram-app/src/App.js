import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render () {
  return (
    <div className="App">
      {this.state.data.map(data => <PostContainer data={data}/>)}
    </div>
  );
}}

export default App;
