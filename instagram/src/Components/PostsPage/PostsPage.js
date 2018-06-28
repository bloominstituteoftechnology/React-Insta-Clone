import React, { Component } from 'react';
import './PostsPage.css';
import SearchBar from '../SearchBar/SearchBar'
import dummyData from '../../dummy-data';
import PostsPlaceholder from '../PostsPlaceholder/PostsPlaceholder';

class PostsPage extends Component {
  
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  filterSearchResults = e => {
    const filteredResults = this.state.posts.filter( post => {
      if (post.username.includes(e.target.value)) {
        return post;
      } else {
        return null;
      }
    });
    this.setState({filteredPosts: filteredResults});
  }

  render() {
    return (
      <div className='app-container'>
        <div className="search-bar-container">
          <div className='header-logo'>
            <img src={require('../../imgs/instagram-camera.png')} className='logo-camera' alt='insta-camera'/>
            <img src={require('../../imgs/instagram-logo.svg.png')} className='logo-name' alt='header-logo'/>
          </div>
          <SearchBar
            filterSearchResults = {this.filterSearchResults}
          />
          <div className='header-icon-bar'>
            <img src={require('../../imgs/circle-icon.png')} className='circle-icon' alt='circle icon'/>
            <img src={require('../../imgs/heart-icon.png')} className='heart-icon' alt='heart icon'/>
            <img src={require('../../imgs/person-icon.png')} className='person-icon' alt='person icon'/>
          </div>
        </div>
        <div className='posts'>
          <PostsPlaceholder 
            posts= {
              this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
            }
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;