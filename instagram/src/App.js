import React, { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';
import './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h6 className="App-title">MIKE-instagram</h6>
        </header>
        <PostContainer />
      </div>
    );
  }
}

export default App;
