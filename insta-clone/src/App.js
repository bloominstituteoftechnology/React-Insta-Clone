import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/Posts/PostContainer';
import SearchBar from './components/SearchBar';
// import SearchBar from './components/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredPosts: [],
    }
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }
  searchPostsHandler = (event) => {
    const posts = this.state.data.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      } return(null);
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler} />
        <PostContainer posts={(this.state.filteredPosts.length > 0) ? this.state.filteredPosts : this.state.data} />
      </div>
    );
  }
}

export default App;
