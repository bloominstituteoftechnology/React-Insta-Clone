import React, { Component } from 'react';
import './App.css';
// import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';



class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     posts: [],
  //     filteredPosts: []
  //   };
  // }

  render() {
    
    return (
      <div className="App">
        {/* <PostsPage /> */}
        <Authenticate />
      </div>
    );
  }
}

export default Authenticate(App);
