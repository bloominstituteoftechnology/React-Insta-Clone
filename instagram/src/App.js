import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <PostsPage />
      </div>
    )
  }

}


export default Authenticate(App);
