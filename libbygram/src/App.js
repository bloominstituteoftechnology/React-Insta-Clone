import React, { Component } from 'react';
import './App.css';
import dummyData from './DummyData';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({ post: dummyData })
  }
  

  render() {
    return (
      <div className="App">
      <PostsPage />
      </div>
    );
  }
}

export default App;
