import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import postData from './application-data.js';
import Posts from './Post.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({ posts: postData });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i className="em em-camera"></i>
          // INSTASHAM //
          SEARCH BAR ***
          <i className="em em-heart"></i>
          <i className="em em-smiley"></i>
        </div>
        <div className="Body">
          <Posts posts = {this.state.posts} />
          </div>
        </div>
    );
  }
}

export default App;
