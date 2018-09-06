import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './post-container';
import SearchBar from '../SearchBar/search-bar';


class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  searchHandler = event => {
    const results = this.state.data.filter(result => {
      if (result.username.includes(event.target.value)) {
        return result;
      }
    });

    this.setState({ searchInput: results });
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchHandler} searchValue={this.state.searchInput} />
        <PostContainer posts={this.state.searchInput.length > 0 ?
        this.state.searchInput : this.state.data} />
      </div>
    );
  }
}

export default PostsPage