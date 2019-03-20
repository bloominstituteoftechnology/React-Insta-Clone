import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      search: ''
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchPosts = e => {
    e.preventDefault();
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(this.state.search)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts});
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPosts} search={this.state.search} inputHandler={this.inputHandler}/>
        <PostContainer posts={
          this.state.search.length > 0 ?
            (this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts) :
            this.state.posts
        } />
      </div>
    );
  }
}

export default PostsPage;