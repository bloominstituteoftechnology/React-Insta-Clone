import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';


class App extends Component {
  constructor() {
    super ();
    this.state = {
      posts: [],
      searchedPosts: []
    }
  }
   
componentDidMount () {
  this.setState ({posts: dummyData})
}


  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPostsFunction} />
        <PostContainer posts ={this.state.posts.length>0 ? this.state.searchedPosts: this.state.posts } />
        <PostContainer posts ={this.state.posts} />
        
      </div>
    );
  }
}

export default App;
