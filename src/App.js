import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data';
import PostsPage from './Components/PostComponents/PostsPage';

class App extends Component {
  constructor(){
      super();
      this.state = {
        posts: [],
        filteredPosts: undefined,
      }
  }

  componentDidMount(){
    this.setState({posts: dummyData});
  }

  handleFilter = event => {
    let searchValue = event.target.value.toLowerCase();
    if(searchValue !== '')
    {
      let newFilteredPosts = this.state.posts.filter(post => post.username.includes(searchValue));
      this.setState({
        filteredPosts: newFilteredPosts,
      });
    }else {
      this.setState({
        filteredPosts: undefined,
      })
    }
  }

  render() {
    return (
      <PostsPage
        posts={this.state.posts}
        handleFilter={this.handleFilter}
        filteredPosts={this.state.filteredPosts}
      />
    );
  }
}

export default App;
