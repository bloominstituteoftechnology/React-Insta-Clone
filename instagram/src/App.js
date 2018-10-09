import React, { Component } from 'react';
import SearchBarContainer from './components/Search/SearchBarContainer';
import PostContainer from './components/Post/PostContainer';
import CommentsContainer from './components/Comments/CommentsContainer';
import './App.css';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData, searchInput: '' });
    }, 1000);
    // this.setState({ dummyData, searchInput: '' });
  }

  handleSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };

  searchPosts = event => {
    event.preventDefault();
    if (this.state.searchInput) {
      this.setState({
        dummyData: this.state.dummyData.filter(post => {
          if (post.username.includes(this.state.searchInput)) {
            return post;
          }
        })
      });
    } else {
      this.componentDidMount();
    }
  };

  render() {
    // console.log(this.state);
    if (!this.state.dummyData) {
      return <div>Loading Data...</div>;
    }

    return (
      <div className="App">
        <SearchBarContainer
          handleSearchInput={this.handleSearchInput}
          searchPosts={this.searchPosts}
          searchInput={this.state.searchInput}
        />
        <PostContainer data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
