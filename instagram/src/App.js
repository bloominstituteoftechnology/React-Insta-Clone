import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Animals: by Luisan</h1>
        </header>
        <PostsPage />
      </div>
    );
  }
}




export default Authenticate(App);
