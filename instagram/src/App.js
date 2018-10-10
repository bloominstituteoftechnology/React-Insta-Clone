import React, { Component } from 'react';
import PostsPage from './components/PostsPage/PostsPage';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: ''
    };
  }

  componentDidMount = () => {
    this.setState({ currentUser: window.currentUser })
  }
  

  render() {
    return <PostsPage />;
  }
}

export default App;
