import React, { Component } from 'react';
import './App.css';
import dummyData from './DummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
    };
    newPost: ''
  };

  componentDidMount() {
    this.setState({ post: dummyData })
  }
  
  // addNewComment = e => {
  //   e.preventDefault();
  //   const post = this.state.post.slice();
  //   post.push({post: post, newPost: '' });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
        <div className="app-post">
        <PostContainer post={this.state.post} 
        addNewComment={this.addNewComment}
        />
      </div>
      </div>
    );
  }
}

export default App;
