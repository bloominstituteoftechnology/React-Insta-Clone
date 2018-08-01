import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

// componentDidMount =()=> {
//   const user = localStorage.getItem("user");
//   this.setState(username: user)
// }

  render() {
    return
      <div className="App">
        <PostsPage />
      </div>
  }
}

export default Authenticate(App);
