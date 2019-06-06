import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {

  constructor () {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );

  }
}



export default Authenticate(App);
