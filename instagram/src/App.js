import React, { Component } from 'react'
import './App.css'
import './index.css'
import authentication from './components/Authentication/Authentication'
import TheSearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './components/dummy-data'

class App extends Component {
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
    console.log(dummyData)
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
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
          handleChange={this.handleChange}
        />
        {filteredPost.map((post, index) => (
          <PostContainer
            key={post.username + index}
            index={index}
            post={post}
            commentInput={this.state.commentInput}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    )
  }
}

export default authentication(App)
