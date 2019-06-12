import React from 'react';
import './App.css';
import dummyData from './dummyData'

import SearchBar from './components/searchBar/searchBar'
import PostContainer from "./components/posts/postContainer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
