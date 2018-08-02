import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data.js';


class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchBar: '',
      searchTerm: '',
      user: '',
      loggedIn: false
    };
  }

  componentDidMount() {
    if(localStorage.getItem('data')){
      this.setState({ posts: JSON.parse(localStorage.getItem('data')) });
    }else {
      this.setState({ posts: dummyData });
    }
  }

  searchHandler = e => {
    this.setState({ searchBar: e.target.value })
  }

  searchSubmit = e => {
    let term = this.state.searchBar;
    this.setState({ searchTerm: term });
  }

  render (){
    return (
      <div>
        <SearchBar searchHandler={this.searchHandler} searchBar={this.state.searchBar} searchSubmit={this.searchSubmit} />
        {this.state.posts.map(post => {
          if(post.username.includes(this.state.searchTerm)){
            return <PostContainer key={post.timestamp} data={post} />
          }
          return '';
        })}
      </div>
    );
  }
}

export default PostsPage;
