import React, { Component } from 'react';
import SearchBar from '../Header/SearchBar';
import PostList from './PostList';
import HeaderContainer from '../Header/HeaderContainer';
import dummyData from '../../dummy-data.js';

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  componentDidMount = () => {
     this.setState({ postData: dummyData })
  }
render() {
  return (
    <div>
<header className="posts-page-header">
<HeaderContainer postData={this.state.postData} />
  </header>

  <PostList postData={this.state.postData}  />
    </div>
)};
}

export default PostsPage;
