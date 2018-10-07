import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      search: "",
      displayedPosts: [],
      likesCounter: 0
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  incrementHandler = name => {
    this.setState({
      posts: this.state.posts.map(post => {
        if(post.username===name) {
          return {
            username: post.username,
            thumbnailUrl: post.thumbnailUrl,
            imageUrl: post.imageUrl,
            likes: post.likes+1,
            timestamp: post.timestamp,
            comments: post.comments
          }          
          }else {
            return post
        }
      })
    })
  }
  handleChange = e => {
    this.setState({ search: e.target.value });
  }   
  searchInputHandler = e => {
    const { value } = e.target;
    this.setState({
      search: value
    },() => {
      this.searchHandler(e);
    });      
  }
  
  searchHandler = e => {
    e.preventDefault();     
  this.setState({
    displayedPosts: this.state.posts.filter(post => {return post.username.toLowerCase().includes(this.state.search.toLowerCase())})
  })
}
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => <PostContainer key={post.timestamp} post={post} incrementHandler={this.incrementHandler} />)}
      </div>
    );
  }
}