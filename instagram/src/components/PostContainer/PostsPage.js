import React from 'react';

import Login from '../Login/Login';
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

  handleLogin (event) {
    localStorage.setItem('username', 'frank')
  }

  componentDidMount () {
    this.setState({instaData: dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar instagramData={this.state.instaData}/>
        <PostContainer comments={this.state.instaData} />
        <Login loginHandler={this.handleLogin}/>
      </div>
    )
  }
}

export default PostsPage;