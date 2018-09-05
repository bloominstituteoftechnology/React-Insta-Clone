import React, { Component } from 'react';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';
import dummyData from '../../dummy-data';


class PostsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            searchInput: ''
        }
    }

    componentDidMount() {
        this.setState({
          posts: dummyData
        });
      }
    

    searchPosts = event => {
        this.setState({
          searchInput: event.target.value
        });
      }
    
      searchSubmit = event => {
        event.preventDefault();
        let posts = this.state.posts.slice();
        posts = posts.filter(post => post.username === this.state.searchInput);
        this.setState({posts, searchInput: ''});
      };
      
    
    
      addLike = likes => {
        let posts = this.state.posts.slice();
        posts = posts.map(post => {
          if(post.likes === likes){
            post.likes = likes + 1;
            return post;
          } else {
            return post;
          }
        });
        
        this.setState({posts});
      };
    
      render() {
        return (
          <div className="posts-page">
            <SearchBar searchInput={this.state.searchInput} searchPosts={this.searchPosts} searchSubmit={this.searchSubmit}/>
            <PostsContainer posts={this.state.posts} addLike={this.addLike}/>
          </div>
        );
      }
}

export default PostsPage;