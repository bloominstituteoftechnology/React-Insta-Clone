import React from 'react';

import Login from '../Login/Login';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from './dummy-data';

class PostsPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      instaData: [],
      username: ""
    }
  }

  handleLoginChange = (event) => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value,
    })
  }
  handleLogin = () => {
    localStorage.setItem('username', this.state.username)
  }

  componentDidMount () {
    this.setState({instaData: dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar instagramData={this.state.instaData}/>
        <PostContainer comments={this.state.instaData} />
        <Login loginHandler={this.handleLogin} loginChangeHandler={this.handleLoginChange}/>
      </div>
    )
  }
}

export default PostsPage;