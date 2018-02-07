import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js'
import dummyData from './dummy-data';

class App extends Component {
  state = dummyData;
  render() {
    return (
      <div className="App">
        <SearchBar />
        {
          this.state.map(post => {
            return <PostContainer
                post={post}
                />;
              })
            }
        <header className="App-header">
          <h1 className="App-title">Welcome to Cool Instagram</h1>
        </header>
        <p className="App-intro">
          Here is some random stuff
        </p>
      </div>
    );
  }
}

export default App;
