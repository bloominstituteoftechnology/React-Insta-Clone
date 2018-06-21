import React, { Component } from 'react'
import './App.css'
import TheSearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './index.css'
import dummyData from './components/dummy-data'
class App extends Component {
  constructor () {
    super()
    this.state = {
      post: []
    }
  }

  componentDidMount () {
    if (window.localStorage.getItem('comments')) {
      this.setState({
        post: JSON.parse(window.localStorage.getItem('comments'))
      })
    } else {
      this.setState({
        post: dummyData
      })
    }
    window.localStorage.setItem('comments', JSON.stringify(dummyData))
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

export default App
