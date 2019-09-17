import React from 'react';
import { Route } from 'react-router-dom';
import "./PostContainer.css";
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import styled from 'styled-components';

const PostsPage = styled.div`

`;

class PostPage extends React.Component {
    constructor(){
      super();
      this.state = {
        data: [],
        filteredPosts: []
      }
    }

    componentDidMount(){
      this.setState({data: dummyData})
    }

    searchPostsHandler = e => {
      const posts = this.state.data.filter(p => {
        if (p.username.includes(e.target.value)){
          return p;
        }
        return p;
      });
      this.setState({filteredPosts: posts});
    }

    render() {
      return (
        <PostsPage>
          <SearchBar handle={this.handleInput} searchPosts={this.searchPostsHandler} />
          <Route exact path="posts" render={
            (props) => <PostContainer  post={this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data} {...props} />
          } />
        </PostsPage>
      );
    }
}

export default PostPage;