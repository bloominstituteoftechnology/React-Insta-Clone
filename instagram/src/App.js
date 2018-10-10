import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      filtered: []
  };
}
  searchHandler = event => {
    event.preventDefault();
    this.setState({
      filtered: this.state.posts.filter(post => {
        if (post.username.includes(event.target.value)) {
          return post;
        } 
      })
    })
  }
  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }
  render() {
    return (
      <div className="App">
          <SearchBar 
            search={this.searchHandler}
            term={this.state.searchTerm}
          />
          <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
