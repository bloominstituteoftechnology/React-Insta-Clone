import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import LoginPage from './components/Login/Login'
import PostsPage from './components/PostContainer/PostsPage'
import authenticate from './components/Authentication/Authenticate'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        
        <ConditionalView />
        
      </div>
    );
  }
}

const ConditionalView = authenticate(PostsPage)(LoginPage);
export default App