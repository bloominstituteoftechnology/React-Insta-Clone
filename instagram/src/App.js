import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
      <header></header>
      <div className="posts">
          <PostContainer />
      </div>
      </div>
    );
  }
}

export default App;
