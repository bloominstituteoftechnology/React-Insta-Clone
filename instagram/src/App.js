import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostsPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }
  render() {
    return (
      <div className="insta_app">
      <PostPage />
      </div>
    );
  }
}

export default App;
