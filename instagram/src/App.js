import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import Login from './components/Login/Login.js';
import Authenticate from './components/Authentication/Authenticate.js';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  };

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
