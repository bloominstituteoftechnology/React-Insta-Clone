import React, { Component } from 'react';

import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {

  render() {
    return (
      <PostsPage />
    );
  }
}

export default Authenticate(App);
