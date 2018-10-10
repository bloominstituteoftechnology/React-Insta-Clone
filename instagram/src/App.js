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
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }  
  searchInputHandler = e => {
    this.setState({
      search: e.target.value
    },() => {
      this.searchHandler();
    });      
  }  
  searchHandler = () => {    
  this.setState({
    displayedPosts: this.state.posts.filter(post => {return post.username.toLowerCase().includes(this.state.search.toLowerCase())})
  })
}
  render() {
    return (
      <div className="App">
        <SearchBar searchInputHandler={this.searchInputHandler} value={this.state.search} />
        <div className="container">
            {this.state.search.length ? (this.state.displayedPosts.map(post => <PostContainer key={post.timestamp} post={post} incrementHandler={this.incrementHandler} />))
            : (this.state.posts.map(post => <PostContainer key={post.timestamp} post={post} incrementHandler={this.incrementHandler} />))}
        </div>
        
      </div>
    );
  }
}