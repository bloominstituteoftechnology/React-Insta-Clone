import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Searchbar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate'


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchedPosts: []
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  searchInput = event => {
    const searchPost = this.state.posts.filter(post => {
      if(post.username.includes(event.target.value)) {
        return post;
      }
    });
    console.log(searchPost);
    this.setState({searchedPosts: searchPost});
  }


  login() {
    localStorage.setItem('username', '')
  }

  render() {
    return (
      <div>
        <Searchbar searchInput={this.searchInput} />
        <PostsPage posts={
          this.state.searchedPosts.length > 0
          ? this.state.searchedPosts:
          this.state.posts
        } />
      </div>
      
    );
  }
}

export default Authenticate(App);
