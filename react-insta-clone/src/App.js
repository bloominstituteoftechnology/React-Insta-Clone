import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { dummyData } from './dummy-data.js';
import { PostList } from './PostList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
    };
  };

  componentDidMount() {
    this.setState({ Posts: dummyData });
  }

  render() {
    return (
      <PostList postProps={ this.state.Posts }/>
    );
  }
}

export default App;
