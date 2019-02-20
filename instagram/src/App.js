import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/Authentication/withAuthenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
