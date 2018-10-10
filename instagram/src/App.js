import React, { Component } from 'react';
import PostsPage from './components/PostsPage/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: window.currentUser
    };
  }

  componentDidMount = () => {
    this.setState({ currentUser: window.currentUser })
  }
  

  render() {
    return <PostsPage />;
  }
}

export default Authenticate(App);
