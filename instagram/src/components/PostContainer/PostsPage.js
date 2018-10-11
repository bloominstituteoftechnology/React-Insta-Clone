import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

import dummyData from '../../dummy-data.js'

class PostsPage extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      searchParam: ''
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  search = event => {
    event.preventDefault()
    console.log(this.state.searchParam)
  }

  handleSearchInputChange = event => {
    this.setState({ searchParam: event.target.value })
  }

  render() {
    const { posts, searchParam } = this.state
    const { search, handleSearchInputChange } = this

    return (
      <div className="App">
        <SearchBar
          searchParam={searchParam}
          search={search}
          handleSearchInputChange={handleSearchInputChange}
        />
        <div className="posts-container">
          {posts.length > 0 &&
            posts
              .filter(({ username }) => username.match(searchParam))
              .map((post, i) => <PostContainer key={i} post={post} />)}
        </div>
      </div>
    )
  }
}

export default PostsPage
