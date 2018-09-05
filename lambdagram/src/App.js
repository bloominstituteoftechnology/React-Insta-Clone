import React, { Component } from 'react';
import './App.css';

import PostPage from './components/PostContainer/postpage';
import Authenticate from './components/Authentication/authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: ''
    }
  }

  render() {
    return (
      <div className='app-container'>
        <PostPage />
      </div>
    );
  }
}

export default Authenticate(App);
