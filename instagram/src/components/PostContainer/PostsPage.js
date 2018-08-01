import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from './dummy-data';

class PostsPage extends React.Component {
  constructor () {
    super();
    this.state = {
      instaData: [],
    }
  }

  componentDidMount () {
    this.setState({instaData: dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar instagramData={this.state.instaData}/>
        <PostContainer comments={this.state.instaData} />
      </div>
    )
  }
}

export default PostsPage;