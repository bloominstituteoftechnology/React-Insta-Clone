import React, { Component } from 'react';
import withAuthenticate from './components/Authentication/withAuthenticate';
import './App.css';

import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {}
    
  }
  

  
  
  render () {
    const ComponentFromWithinAuthenticate = withAuthenticate
    return (
      <div className="App">
        <ComponentFromWithinAuthenticate />
      </div>
    )
  }
}


export default withAuthenticate(PostPage)(Login);