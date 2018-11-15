import React, { Component } from 'react';

// styles
import './App.css';

// components
import Authenticate from './components/Authentication/Authenticate';
import PostPage from './components/PostContainer/PostPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostPage
          handleLogin={(name, password) => this.handleLogin(name, password)}
        />
      </div>
    );
  }
}

export default Authenticate(App);