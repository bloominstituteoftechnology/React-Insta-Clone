import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';

class App extends Component {
  constructor () {
    super();
    this.state = {
      
    }
  }

  componentDidMount () {
  }
  render() {
    return (
      <div>
      <PostsPage />
      <Login />
      </div>
    );
  }
}

export default Authenticate(App);
