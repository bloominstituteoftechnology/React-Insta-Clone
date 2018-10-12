import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("Mounted");
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
