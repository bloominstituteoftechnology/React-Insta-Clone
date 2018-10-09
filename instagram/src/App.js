import React, { Component } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

import './reset.css'
import './App.css'

import dummyData from './dummy-data.js'

class App extends Component {
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
    let { posts, searchParam } = this.state
    const { search, handleSearchInputChange } = this

    console.log('posts')
    console.log(posts)
    // console.log(posts.filter(({ username }) => username.match(searchParam)))

    posts = posts.filter(({ username }) => username.match(searchParam))

    console.log(posts)

    return (
      <div className="App">
        <SearchBar
          searchParam={searchParam}
          search={search}
          handleSearchInputChange={handleSearchInputChange}
        />
        <div className="posts-container">
          {posts.length > 0 &&
            posts.map((post, i) => <PostContainer key={i} post={post} />)}
        </div>
      </div>
    )
  }
}

export default App
