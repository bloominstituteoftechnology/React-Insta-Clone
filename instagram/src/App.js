import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';



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
        <PostsPage />
      </div>
    );
  }
}

export default App;
