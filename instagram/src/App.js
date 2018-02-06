import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          <PostContainer />
        </p>
      </div>
    );
  }
}

export default App;
