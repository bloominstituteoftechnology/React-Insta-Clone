import React, { Component } from 'react';
import PostPage from './components/Post/PostPage';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default App;
