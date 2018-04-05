import React, { Component } from "react"
import "./App.css"
import PostContainer from "./components/PostContainer"
import SearchBar from "./components/SearchBar"
import data from "./dummy-data"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {data.map(dummy => <PostContainer {...dummy} />)}
      </div>
    )
  }
}

export default App
