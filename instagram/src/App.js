import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';




class App extends Component {
  constructor() {
    super();
    this.state = {};

  } //constructor ends
         
  render() {
    return (
      <div className="App">
          <PostsPage />
      </div>

    ); 
  } 
} 

export default App;
