import React, { Component } from 'react'
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';

export class PostsPage extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    componentDidMount() {
        this.setState({ posts: dummyData })
    }
  render() {
    return (
      <div className="App">
      <SearchBar searchTerm={this.state.searchTerm}
      searchPosts={this.searchPostsHandler} />

      <PostsContainer posts= {
          this.state.filteredPosts.length > 0 
          ? this.state.filteredPosts: 
          this.state.posts} />
        
      </div>
    )
  }
}

export default PostsPage
