import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    this.setState({ post: post });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostContainer post = {this.state.post} />
      </div>
    );
  }
}

export default App;
