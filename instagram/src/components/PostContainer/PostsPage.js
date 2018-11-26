import React, { Component } from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

import dummyData from '../../dummy-data';

const commentArray = dummyData.map(postObject => {
  return postObject['comments'];
});

const likeArray = dummyData.map(postObject => {
  return postObject.likes;
})

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      isSearched: false,
      data: dummyData,
      comment: commentArray,
      filterData: [],
      likes: likeArray
    }
  }

  handleOnSearch(e) {
    const input = e.target.value;

    if (e.target.value === '') {
      this.setState({ isSearched: false });
    } else {
      this.setState({ isSearched: true });
    }

    const filterData = this.state.data.map(postObject => {
      return postObject['comments'].filter(commentObject => {
        return commentObject['username'].includes(input)
      })
    })
    
    this.setState({ filterData: filterData });
  }

  render() {
    return (
      <div>
        <SearchBar handleOnSearch={this.handleOnSearch.bind(this)} />
        <div className="container">
          { this.state.isSearched === true
            ? <PostContainer dummyData={this.state.data} comment={this.state.comment} likes={this.state.likes} filteredData={this.state.filterData} />
            : <PostContainer dummyData={this.state.data} comment={this.state.comment} likes={this.state.likes} />
          }
        </div>
      </div>
    )
  }
}

export default PostsPage;