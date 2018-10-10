import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData,
      filtered: []
  };
}
  searchHandler = event => {
    event.preventDefault();
    this.setState({
      filtered: this.state.posts.filter(post => {
        if (post.username === post.username) {
          return post;
        } 
      })
    })
  }
  render() {
    return (
      <div className="App">
          <SearchBar 
            search={this.searchHandler}
          />
          <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
