import React, { Component } from 'react';
import './App.css';
import PostsPage from './Components/PostContainer/PostsPage.js'; 

class App extends Component {

  render() {
    return (
      <div>
        <PostsPage /> 
      </div>
    );
  }
}

export default App;
