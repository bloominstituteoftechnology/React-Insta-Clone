import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login'
import './App.scss';
import withAuthenticate from './components/authenticate/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostPage);

class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
