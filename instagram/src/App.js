import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      filteredPosts: [],
      searchInput: "",
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 800);
  }

  Search = event => {
    const posts = this.state.dummyData.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post
      }
    })
    this.setState({ filteredPosts: posts })
  }

  render() {
    return (
      <div className="App">
        <h1>Instagram</h1>
        <SearchBar search={this.Search} />
        <PostContainer
          dummyData={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.dummyData} />
      </div>
    );
  }
}

export default App;


