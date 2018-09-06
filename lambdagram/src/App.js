import React, { Component } from 'react';

import PostPage from './components/PostContainer/postpage';
import Authenticate from './components/Authentication/authenticate';

class App extends Component {
  render() {
    return <PostPage />;
  }
}

export default Authenticate(App);
