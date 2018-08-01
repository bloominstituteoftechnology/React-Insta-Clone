import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from './components/Authenticate/Authenticate';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      allPosts: [],
      search: "",
     
    }
  }

  componentDidMount() {
    this.setState ({
      posts: dummyData,
      allPosts: dummyData
    });
  }

  handleSearch = (event) => {
    this.setState ({
      search: event.target.value,
      posts: this.state.allPosts.filter(post => new RegExp(event.target.value, "i").exec(post.username))
    })
  }

  render() {
    return (
      <div className="App">
      <SearchBar  value={this.state.search} handleSearch={this.handleSearch} />
      <div className="container">
        {this.state.posts.map((post, index) => {
          return (
            <PostContainer key={index} posts={post} />
          )
        })}
        </div>
      </div>
    );
  }
}

export default Authenticate(App);
