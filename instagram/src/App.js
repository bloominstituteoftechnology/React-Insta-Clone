import React, { Component } from 'react';
import './App.css';

import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';

const Authentication = Authenticate(PostsPage);

class App extends Component {
  render() {
    return <Authentication />
  }
}

export default App;