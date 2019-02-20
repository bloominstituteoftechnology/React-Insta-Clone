import React, { Component } from 'react';
import Login from './components/Login/Login';

import './App.css';

import withAuthenticate from './components/Authentication/withAuthenticate';
import PostsPage from './components/Postpage/PostsPage';
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage, Login);
class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
