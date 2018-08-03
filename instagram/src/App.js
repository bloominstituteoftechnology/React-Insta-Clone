import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({name: dummyData});
  }
  
  searchPostsHandler = event => {
    const posts = this.state.name.filter(p => {
      if (p.username.includes(event.target.value)) {
        return p;
      }
    });
    this.setState({filteredPosts: posts});
  }

  render() {
    return (
      <div>
        <SearchBar searchPosts={this.searchPostsHandler} />
        <PostsPage 
          name={
            this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.name
          }

        />
      </div>
    );
  }
}

export default App;
