import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostsPage from './components/PostContainer/PostsPage.js'
import Authenticate from './Authentication/Authenticate'

import './App.css';

class App extends Component {
  constructor() {
    console.log("constructor invoked")
    super()
    this.state = {}
  }

  render() {
    console.log("render invoked")
    return (
      <div className="App">
        <section >
          <PostsPage />
        </section>



      </div>
    );
  }
}

export default Authenticate(App);
