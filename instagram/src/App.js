import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchInput: ''
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  searchPosts = event => {
    this.setState({
      searchInput: event.target.value
    });
  }

  searchSubmit = event => {
    event.preventDefault();
    let posts = this.state.posts.slice();
    posts = posts.filter(post => post.username === this.state.searchInput);
    this.setState({posts, searchInput: ''});
  };
  


  addLike = likes => {
    let posts = this.state.posts.slice();
    posts = posts.map(post => {
      if(post.likes === likes){
        post.likes = likes + 1;
        return post;
      } else {
        return post;
      }
    });
    
    this.setState({posts});
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchInput={this.state.searchInput} searchPosts={this.searchPosts} searchSubmit={this.searchSubmit}/>
        <PostsContainer posts={this.state.posts} addLike={this.addLike}/>
      </div>
    );
  }
}

export default App;
