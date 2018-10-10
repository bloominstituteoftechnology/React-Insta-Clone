import React from 'react';
import PostContainer from './PostContainer';
import SearchBarContainer from './../Search/SearchBarContainer';
import dummyData from './../../dummy-data.js';

import './post.css';

class PostPage extends React.Component {
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
    // console.log(this.props.data);
    if (!this.state.dummyData) {
      return <div>Loading Data...</div>;
    }
    return (
      <div>
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

export default PostPage;
