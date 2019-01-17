import React, { Component } from 'react';
import styled from 'styled-components';

import dummyData from '../../dummy-data';
import PostsContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

// Styles using styled-components 
const App = styled.div`
text-align: center;
width: 60%;
margin: 0 auto;
`   

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = e => {
    // eslint-disable-next-line
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  
  
  render() {
    return (
      <App>
        <SearchBar
        //   searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </App>
    );
  }
}

export default PostsPage;
