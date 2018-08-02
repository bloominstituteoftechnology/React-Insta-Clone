import React, { Component } from 'react';
import './css/index.css';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authentication from './components/Authentication/Authentication.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      displayData: [],
      searchValue: '',
    }
  }

  render() {
    return (
      <div>App.js
        <PostsPage />
      </div>
    );
  }
}

export default Authentication(App);
