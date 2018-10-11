import React, { Component } from 'react'
import TheSearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import dummyData from '../dummy-data'

class PostsPage extends Component {
  constructor () {
    super()
    this.state = {
      post: [],
      search: ''
    }
  }

  componentDidMount () {
    this.setState({
      post: dummyData
    })
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render () {
    const filteredPost = this.state.post.filter((curPost) => {
      return (
        curPost.username
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      )
    })
    return (
      <div className='page'>
        <TheSearchBar
          search={this.state.search}
          filteredPost={filteredPost}
          onChange={this.handleSearch}
        />
        {filteredPost.map((post, index) => (
          <PostContainer
            key={post.username + index}
            index={index}
            post={post}
          />
        ))}
      </div>
    )
  }
}

export default PostsPage
