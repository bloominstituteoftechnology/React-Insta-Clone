import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authentication/Authenticate';


class App extends Component {
  constructor() {
    super();
    this.state={};
  }

  render() {
    return (
      <div> 
        <PostPage/>
      </div>
    )
  }
}

export default Authenticate(App);
