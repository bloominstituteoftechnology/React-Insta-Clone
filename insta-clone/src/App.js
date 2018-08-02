import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

const App = Authenticate(
  
  class App extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div className="App">
          <PostsPage 
          />
        </div>
      );
    }
  }

);

export default App;
