import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
// Class component that is only used to render the PostsPage component
class App extends Component {
  render() {
    return <PostsPage />;
  }
}

export default Authenticate(App);
