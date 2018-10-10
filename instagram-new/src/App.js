import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Authentication />
      </div>
    );
  }
}

const Authentication = Authenticate(PostsPage);
export default App;
