import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/authentication/authenticate'

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   posts: [],
    //   filteredPosts: [],
    //   isLoggedIn : false,
    // };
  }
  login = ()=>{
    // set a username on local storage
    // force update the page
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
