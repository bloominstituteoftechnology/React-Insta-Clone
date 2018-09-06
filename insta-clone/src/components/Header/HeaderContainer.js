import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import styled from 'styled-components';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  searchPosts = (event) => {
    event.preventDefault();
    let newPosts = [...this.state.postData];
    newPosts = newPosts.filter(post=> {
      return post.username === this.state.search;
    })
    this.setState({ postData: newPosts });
    event.target.reset();
    }

  render() {
    return (
      <div className="header">
      <div className="user-dashboard">
      <h2>Welcome, {localStorage.username}!</h2>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }
      }>Logout</button>
      </div>
      <div className="searchbar">
        <h1 className="title-headline">NOT Instagram</h1>
        <SearchBar
        searchPosts={this.searchPosts}
        handleChange={this.handleChange}/>
        </div>
        </div>
    )
  }
}
