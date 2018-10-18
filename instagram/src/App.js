import React, { Component } from 'react';
import Authenticate from './components/Authentication/components/Authenticate';


import './App.css';
import './components/SearchBar/components/search.css';
import './components/PostContainer/components/container.css';
import './components/CommentSection/components/comment.css';
import './components/Login/login.css';

import PostPage from './components/PostContainer/components/PostPage';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  

  render() {
    return (
      <div>
      <PostPage/>
      </div>
    );
  }
}

export default Authenticate(App);
