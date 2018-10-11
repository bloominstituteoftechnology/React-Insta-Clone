import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      search: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        postData: dummyData
      });
    }, 800);
  }

  search = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    let filterSearch = this.state.postData.filter(post => {
      return post.username.indexOf(this.state.search) !== -1;
    });
    return (
      <div className="appContainer">
        {!this.state.postData.length ? (
          <h1 className="loadingScreen">Loading...</h1>
        ) : (
          <div>
            <SearchBar stateSearch={this.state.search} search={this.search} />
            {filterSearch.map(postInfo => (
              <PostContainer postInfo={postInfo} key={postInfo.timestamp} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PostsPage;
