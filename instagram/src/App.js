import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      searchInput: ""
    }
  }
  componentDidMount = () => {
    this.setState({
      posts: dummyData
    })
  }
  handleChangeSearchBar = (e) => {
    const searchValue = e.target.value
    const filteredPosts = dummyData.filter((post) => post.username.includes(searchValue))    

    this.setState({
      [e.target.name]: e.target.value,
      posts: filteredPosts
    })
  }
  handleLike = (postId) => {
    let newPosts = this.state.posts.map((post) => {
      if (post.id === postId) {
        post.likes++
      }
      return post
    })
    this.setState({
      posts: newPosts
    })
  }
  handleSubmit = (e, postId, commentInput) => {
    if (e.key === "Enter") {
      const newPosts = this.state.posts.map((post) => {
        if (post.id === postId) {
          post.comments.push({
            username: "Stranger",
            text: commentInput
          })
        }
        return post
      })
      this.setState({
        posts: newPosts
      })
    }
  }
  render() {
    const { posts, searchInput } = this.state
    return (
      <div>
        <SearchBar searchInput={searchInput} handleChangeSearchBar={this.handleChangeSearchBar}/>
        <PostContainer posts={posts} handleLike={this.handleLike} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
