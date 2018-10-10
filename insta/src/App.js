import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'

// import PostsPage from './components/PostContainer/PostContainer.js'

class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <div className="App">
        <PostsPage />
        </div>
      );
  }
}

export default App;
