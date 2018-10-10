import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
// import Authenticate from './components/Authentication/Authenticate'
import LoginPage from './components/Login/LoginPage'

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        {/* <PostsPage /> */}
        <LoginPage click=/>
        </div>
      );
  }
}

export default App;
