import React, { Component } from "react"
import "./App.css"
import PostContainer from "./components/PostContainer"
import SearchBar from "./components/SearchBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
      </div>
    )
  }
}

export default App
