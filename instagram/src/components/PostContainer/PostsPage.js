import React, { Component } from 'react'
import TheSearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import dummyData from '../dummy-data'

class PostsPage extends Component {
  constructor () {
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount () {
    this.setState({
      post: dummyData
    })
  }

  render () {
    return (
      <div className='page'>
        <TheSearchBar />
        {this.state.post.map((post, index) => (
          <PostContainer key={post.username + index} posts={post} />
        ))}
      </div>
    )
  }
}

export default PostsPage
