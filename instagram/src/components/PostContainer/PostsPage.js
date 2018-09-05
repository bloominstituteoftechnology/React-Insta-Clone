import React, { Component } from 'react';
import './postContainer.css';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';
import dummyData from '/Users/clintkunz/React Intermediate/React-Insta-Clone/instagram/src/dummy-data.js';

class PostsPage extends Component {

    constructor() {
        super();
        this.state = {
          posts: [],
          filteredPosts: []
        } 
      }
      
      componentDidMount() {
        this.setState({posts: dummyData})
      }
      
      searchPostsHandler = e => {
        const posts = this.state.posts.filter(p => {
          if (p.username.includes(e.target.value)) {
            return p;
          } return null; 
        });
        this.setState({ filteredPosts: posts})
      };
        
    render() {
        return (
            <div className="post-page">
                <SearchBar 
                searchTerm={this.state.searchTerm} 
                searchPosts={this.searchPostsHandler}
                />
                <PostsContainer posts={
                this.state.filteredPosts.length > 0 
                ? this.state.filteredPosts 
                : this.state.posts
                } />
        </div>
        )
    }
}
export default PostsPage;