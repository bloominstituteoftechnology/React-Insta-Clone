import React, { Component } from 'react';
import './App.css';
import PostsPage from './Components/PostsPage/PostsPage';
import Authenticate from './Components/Authentication/Authenticate';

class App extends Component {
  
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
