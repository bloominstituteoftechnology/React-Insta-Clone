import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authenticate/Authenticate'
import {TheApp} from './components/Reusables/Reusables'

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <TheApp>
        <PostsPage />
      </TheApp>

    );
  }
}

export default Authenticate(App);
