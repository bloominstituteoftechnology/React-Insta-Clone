import React, { Component } from 'react';
import Authenticate from './components/Authentication/components/Authenticate';
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
