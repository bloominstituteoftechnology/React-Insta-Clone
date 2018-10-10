import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js'
import Authenticate from './components/Authentication/Authenticate'


class App extends Component {


  render() {
    return (
      <div>
      <Authenticate {PostsPage} />
      </div>
    );
  }
}

export default App;
