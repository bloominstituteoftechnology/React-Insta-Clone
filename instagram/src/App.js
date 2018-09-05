import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  render() {
    return (
      <div className="app">
        <PostsPage />;
      </div>
    );
  }
}
export default Authenticate(App);
