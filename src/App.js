import React from 'react'
import './App.css'
import './dummy-data'
import Search from './components/SearchBar/Search.js'
import Post from './components/PostContainer/Post.js'
import Comment from './components/CommentSection/Comment.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram Clone</h1>
        </header>
        <Search />
        <Post />
        <Comment />
      </div>
    )
  }
}

export default App
