import React, { Component } from 'react';
import './App.css';
import withAuthenticate from './Components/Authentication/withAuthenticate';
import PostPage from './Components/PostContainer/PostPage';
import LoginPage from './Components/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
      <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);

export default App;
