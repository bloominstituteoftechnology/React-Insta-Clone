import React from 'react'
import './App.css'
import dummyData from './dummy-data'
import Search from './components/SearchBar/Search.js'
import Post from './components/PostContainer/Post.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  search = (searchStr) => {
    let data = [...this.state.data].filter(post => post.username.includes(searchStr))
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <Search
          className="Search"
          data={this.state.data}
          search={this.search}
        />
        <div className="Posts" >
          {this.state.data.map( item => {
            return (
              <Post
                className="Post"
                key={item.timestamp}
                post={item}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
