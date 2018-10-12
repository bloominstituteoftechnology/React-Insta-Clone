import React, { Component } from 'react';
import Authenticate from '../src/Authentication/Authenticate';
import PostsPage from '../src/PostsPage';

class App extends Component {
  render() {
    return (
      <>
        <PostsPage />
      </>
    );
  }
}

export default Authenticate(App);
