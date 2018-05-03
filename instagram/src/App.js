import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData,
      searchInput: ""
    }
  }
  handleChangeSearchBar = (e) => {
    const searchValue = e.target.value
    const filteredPosts = dummyData.filter((post) => post.username.includes(searchValue))    

    this.setState({
      [e.target.name]: e.target.value,
      posts: filteredPosts
    })
  }
  render() {
    const { posts, searchInput } = this.state
    return (
      <div>
        <SearchBar searchInput={searchInput} handleChangeSearchBar={this.handleChangeSearchBar}/>
        <PostContainer posts={posts} />
      </div>
    );
  }
}

export default App;
