import React, { Component } from 'react';
import dummyData from '././components/dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import LikeSection from './components/PostContainer/LikeSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData});
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });

    this.setState({ filteredPosts: posts});
  }

  render() {
    return (
      <div className='App'>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer posts={this.state.filteredPosts.length > 0
        ? this.state.filteredPosts
        : this.state.posts 
        }
        />
        <LikeSection />
      
      </div>
    );
  }
}
export default App;
