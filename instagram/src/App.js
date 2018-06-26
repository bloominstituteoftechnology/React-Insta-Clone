import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Search from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
    componentDidMount(){
      this.setState({ posts: dummyData });
    }
    searchPostsHandler = e => {
      const posts = this.state.posts.filter(p => {
        if (p.username.includes(e.target.value)) {
          return p;
        }
      });
      this.setState({ filteredPosts: posts });
    };

  render(){
    return (
      <div className="App">
      <Search />
      <PostContainer posts={this.state.posts}/>
      </div>
    );
  };
}

export default App;
