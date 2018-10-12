import React, { Component } from 'react';
import './PostsPage.css';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import styled from 'styled-components'

const PostsPageContainer = styled.div`
  display: flex;
`

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 90px;
`

class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        searchInput: ''
      }
    };
  
    componentDidMount() {
      this.setState({
        posts: dummyData
      })
    };
  
    //track changes in search input
  
    typeInSearch = (e) => {
      this.setState({
        searchInput: e.target.value
      }, console.log(this.state.searchInput))
    }
  
    //perform search
  
    submitSearch = (e) => {
      e.preventDefault();
      let posts = this.state.posts.slice();
      posts = posts.filter(post => post.username === this.state.searchInput);
      this.setState({
        posts: posts
      })
    }

    render() {
        return (
          <PostsPageContainer>
            <SearchBar 
              value={this.state.searchInput}
              onChange={this.typeInSearch}
              onSubmit={this.submitSearch}
            />
            <PostsContainer>
              {this.state.posts.map(post => {
                return (
                  <PostContainer 
                    key={Math.random()} 
                    postInfo={post}
                  />
                )
              })}
            </PostsContainer>
          </PostsPageContainer>
        );
      }
    }
  

export default PostsPage;