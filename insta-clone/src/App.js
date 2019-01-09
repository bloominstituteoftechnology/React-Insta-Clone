import React, { Component } from 'react';
import PostsPage from './Components/PostContainer/PostsPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my Instagram Clone App</h1>
        <PostsPage />
      </div>
    );
  }
}

export default App;