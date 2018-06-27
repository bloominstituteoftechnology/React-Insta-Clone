import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      
    };
  }

  
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <h1>clown</h1>
        <PostsPage />
      </div>
    );
  }
}

export default App;
