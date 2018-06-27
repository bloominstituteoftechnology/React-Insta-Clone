import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostsContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filtered: [],
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  filterPosts = e => {
    const filteredPosts = this.state.posts.filter(fp => {
      if (fp.username.includes(e.target.value)) {
        return fp;
      }
    });
    this.setState({ filtered: filteredPosts});
  };

  displayedPosts() {
    if (this.state.filtered.length > 0) {
      return this.state.filtered;
    } else return this.state.posts;
  }
  
  
  render() {
    console.log(this.state.filtered);
    return (
      <div className="App">
        <SearchBar filterPosts={this.filterPosts}/>
        <PostContainer posts={ this.displayedPosts() }/>
      </div>
    );
  }
}

export default App;
