import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      }
    }
 


  render() {
    return (
      <div className="App">
        <div>
            <PostsPage />
        </div>
      </div>
    );
  }
}

export default Authenticate(App);
