import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      validated: [],
    };
  }

  render () {
    return (
      <div>
        <PostsPage />
      </div>
    )
  }

}


export default App;
