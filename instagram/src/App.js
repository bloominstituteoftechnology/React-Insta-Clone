import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostPage from './components/PostPage/PostPage';

class App extends Component {

  //------------------------------------------------
  constructor(props) {
    super(...arguments);
    this.state = {
      posts: [],
      searchQuery: null
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({posts: dummyData});
    }, 200);
  }
  render() {
    return (
      <div className="instagram">
        <SearchBar onSubmit={this.search} />
        <PostPage
          authorQuery={this.state.searchQuery}
          posts={this.state.posts}
        />
      </div>
    );
  }

  //------------------------------------------------
  search = (searchText) => {
    if(!searchText.length){ searchText = null;}
    this.setState({
      searchQuery: searchText
    });
  }
}

export default App;
