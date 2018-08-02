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
    this.setState({ posts: dummyData });
  }

  searchHandler = e => {
    this.setState({ searchBar: e.target.value })
  }

  render (){
    return (
      <div>
        <SearchBar searchHandler={ this.searchHandler } searchBar={this.state.searchBar}/>
        {this.state.posts.map(post => {
          return <PostContainer key={post.timestamp} data={post} />
        })}
      </div>
    );
  }
}

export default PostsPage;
