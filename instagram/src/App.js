import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Insta-Clone!</h1>
          <SearchBar />
        </header>
        <div className="posts">
          {this.state.data.map(post => 
            <PostContainer postInfo={post} 
                           key={Math.random(Date.now())} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
