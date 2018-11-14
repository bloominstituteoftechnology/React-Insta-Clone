import React, { Component } from 'react';
import './index.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';
import PostsContainer from './components/PostsContainer/PostsContainer.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({postData: dummyData})
  }

  searchPosts = event => {
    const searchPosts = this.state.postData.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: searchPosts})
  }

  render() {


    return (
      <div className="App">
        <SearchBar 
          searchPosts={this.searchPosts}
        />

        <PostsContainer 
          posts={
            this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.postData
          }
        />

      </div>
    );
  }
}

export default App;
