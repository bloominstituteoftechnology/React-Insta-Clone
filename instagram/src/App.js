import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate'

class App extends Component {
  constructor() {
    super();
    this.state = {
      validated: false
    }
  }

  render() {
    return (
      <div className="App">
        <PostsPage 
          filteredPosts={this.state.filteredPosts}
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default Authenticate(App);
