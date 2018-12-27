import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './Authentication/Authenticate';
import Login from './components/Login/Login';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      posts: [],
    }
  }

  
  render() {
    return (
      <div className="App">
        <Login />
        <PostPage />
        
      </div>
    );
  }
}

export default Authenticate(App);