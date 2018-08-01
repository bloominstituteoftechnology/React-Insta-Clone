import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import PostsPage from './Components/PostComponents/PostsPage';
import Authenticate from './Components/Authentication/Authenticate';

const AuthenticatedPosts = Authenticate(PostsPage);

class App extends Component {
  constructor(){
      super();
      this.state = {};
  }

  render() {
    return (
      <AuthenticatedPosts />
    );
  }
}

export default App;
