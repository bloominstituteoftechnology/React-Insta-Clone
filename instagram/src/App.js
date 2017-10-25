import React, { Component } from 'react';
import postData from './application-data';
import Posts from './Posts.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.setState({ posts: postData })
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <Posts post={ this.state.posts }/>
      </div>
    );
  }
}

export default App;
