import React, { Component } from 'react';
import './App.css';
import Comment from './components/CommentSection/Comment' ;
import Post from './components/PostContainer/Post' ;
import Search from './components/SearcgBar/Seach' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram Clone</h1>
        </header>
        <p className="App-intro">
          HELLO REACT
        </p>

        <Comment />
        <Post />
        <Search />

      </div>
    );
  }
}

export default App;
