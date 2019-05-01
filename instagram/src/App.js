import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Component/SearchBar/search-bar";
import Post from "./Component/PostContainer/Post";
import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchUsername(e) {
    const posts = this.state.data.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  }

  render() {
    return (
      <div>
        <SearchBar search={this.searchUsername}/>
        <Post data={this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data} />
      </div>
    )
  }
}

export default App;