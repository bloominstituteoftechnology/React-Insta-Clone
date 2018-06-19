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
    this.setState({
      post: dummyData
    })
  }
  handlesLikes = (element) => {
    element.style.backgroundColor = 'red'
  }

  render () {
    return (
      <div className='page'>
        <TheSearchBar />
        {this.state.post.map((post, index) => (
          <PostContainer
            key={post.username + index}
            posts={post}
            onClick={this.handlesLikes}
          />
        ))}
      </div>
    )
  }
}

export default App
