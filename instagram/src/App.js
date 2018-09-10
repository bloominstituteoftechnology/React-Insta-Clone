import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/postContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <PostContainer />
       
      </div>
    );
  }
}

export default App;
