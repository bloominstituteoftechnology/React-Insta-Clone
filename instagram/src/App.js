import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Search from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer';
import Authentication from './components/Authentication/Authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
    componentDidMount(){
      this.setState({posts: dummyData});
    }
    searchPostsHandler = e => {
      const posts = this.state.posts.filter(p => {
        if (p.username.includes(e.target.value)){
          return p;
        }
      });
      this.setState({filteredPosts: posts});
    };

  render(){
    return (
      <div className="App">
      <Search searchPosts={this.searchPostsHandler}
      searchTerm={this.state.searchTerm}/>
      <PostContainer posts={
        this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts
        } />
      </div>
    );
  };
}

export default Authentication(App);
