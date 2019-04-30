import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';

const App = Authenticate (
  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }
  render() {
    // Authenticate(App);
    return (
      <div className="insta_app">
      <PostsPage />
      </div>
    );
  }
}
)


export default Authenticate(App);
