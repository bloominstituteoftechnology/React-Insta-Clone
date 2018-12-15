import React, { Component } from 'react';
import logo from './logo.svg';
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

searchPostsFunction = elem =>{
  const posts=this.state.posts.filter(p=>{
    if(p.text.includes(elem.target.value)) {
      return p;
    }
  });
  this.setState({ searchedPosts: posts })
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
