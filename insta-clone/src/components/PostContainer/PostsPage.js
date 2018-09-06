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
      search: '',
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  componentDidMount = () => {
     this.setState({ postData: dummyData })
  }
  searchPosts = (event) => {
    event.preventDefault();
    let newPosts = [...this.state.postData];
    newPosts = newPosts.filter(post=> {
      return post.username === this.state.search;
    })
    this.setState({ postData: newPosts });

    }
render() {
  return (
    <div>
<header className="posts-page-header">
<HeaderContainer
  searchPosts={this.searchPosts}
  handleChange={this.handleChange}/>
  </header>

  <PostList postData={this.state.postData}  />
    </div>
)};
}

export default PostsPage;
