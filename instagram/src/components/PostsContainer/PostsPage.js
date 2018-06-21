import React, { Component } from 'react';
import './PostsContainer.css';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  state = {
    posts: [],
    searchPhrase: "",
    filteredPosts: []
  }

  componentDidMount() {
    if (window.localStorage.getItem("comments")) {
      this.setState({
        posts: JSON.parse(window.localStorage.getItem("comments"))
      });
    } else {
      this.setState({ posts: dummyData });
    }
    window.localStorage.setItem("comments", JSON.stringify(dummyData));
  }

  searchHandler = e => {
    this.setState({ searchPhrase: e.target.value });

    setTimeout(() => {
      const posts = this.state.posts.filter(post => post.username.includes(this.state.searchPhrase));
      this.setState({ filteredPosts: posts });
    }, 1);
  };

  logout() {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="instagram-icon-and-logo-container">
            <i className="fab fa-instagram"></i>
            <img src="iglogo.png" alt="Logo." />
          </div>
          <SearchBar search={this.searchHandler} />
          <div className="header-icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user" onClick={this.logout}></i>
          </div>
        </header>
        <PostsContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;
