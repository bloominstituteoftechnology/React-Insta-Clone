import React, { Component } from 'react';
// import './App.css';
//import PostPage from './components/PostContainer/PostsPage';
// import Authenticate from './components/Authentication/Authenticate';
import PostPage from './components/postContainer/PostPage'
import Authenticate from './components/Authentication/Authentication'

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

export default Authenticate(App);
