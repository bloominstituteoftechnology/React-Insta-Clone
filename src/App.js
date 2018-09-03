import React from 'react'
import './App.css'
import dummyData from './dummy-data'
import Search from './components/SearchBar/Search.js'
import Post from './components/PostContainer/Post.js'
import Comment from './components/CommentSection/Comment.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram Clone</h1>
        </header>
        <Search />
        {this.state.data.map( item => {
          return (
            <div className="Item" key={item.timestamp}>
              <Post post={item} />
              <Comment comment={item.comments} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
