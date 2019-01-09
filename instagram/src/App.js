import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage'


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {

    return (
      <div>
        <PostPage />
      </div>

    );
  }
}



export default App;
