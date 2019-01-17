import React, { Component } from 'react';
import './App.css';
import Authenticate from './Authentication/Authentication';
import PostPage from './Components/PostPage';




class App extends Component {
  render() {
    return <PostPage />
  }
}

export default Authenticate(App);
