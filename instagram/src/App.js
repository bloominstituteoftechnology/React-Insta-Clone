import React, { Component } from 'react';
import './css/index.css';
// import DummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage.js';
// import Authentication from './components/Authentication/Authentication.js';s

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

export default App;
