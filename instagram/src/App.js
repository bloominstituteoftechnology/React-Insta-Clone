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
          <SearchBar />
        </header>
        <p className="App-post">
          {this.state.data.map(post => (
            <PostContainer 
            key={Math.random(Date.now())} 
            postComment={postComment} 
            postUser={post.username} 
            postImg={post.image}
            /> 
          ))}
        </p>
      </div>
    );
  }
}

export default App;
