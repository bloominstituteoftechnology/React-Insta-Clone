import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

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
    this.setState({
      filteredPosts: this.state.posts.filter(p => {
       return p.username.includes(e.target.value) 
      
      })
    })
  };

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
      
      </div>
    );
  }
}
export default App;
