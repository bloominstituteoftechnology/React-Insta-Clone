import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';

class App extends Component {
  constructor(){
    super();
    this.state=({
      users: [1]
    })
  }

  
  

  render() {
    return (
      <PostsPage />
    );
  }
}

  
  

export default Authenticate(App);
