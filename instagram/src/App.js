import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authenticate/Authenticate'

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <PostsPage />
      </div>

    );
  }
}

export default Authenticate(App);
