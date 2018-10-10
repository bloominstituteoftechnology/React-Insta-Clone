import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostsPage from './components/PostContainer/PostsPage.js'
import Authenticate from './Authentication/Authenticate'

import './App.css';

class App extends Component {
  constructor() {
    console.log("constructor invoked")
    super()
    this.state = {
      postData: [],
      filteredPosts: []

    }
  }

  searchPostsHandler = e => {
    const postData =this.state.postData.filter(p => {
      if(p.username.includes(e.target.value)) {
        return p
      }
    })
    this.setState({filteredPosts: postData})
  }
  render() {
    console.log("render invoked")
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler} />
        </header>
        <section >
          <PostsPage post={this.state.postData} />
        </section>



      </div>
    );
  }
}

export default App;
