import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';
// Class component that passes the props from ? to the following functions
// search(), componentDidMout(), render()
// this.state.posts holds all the posts in state once componentDidMount() runs
// this.state.search holds the search data from the components SearchBar
class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: ''
    };
  }
  // search() filters out posts based off username
  search = event => {
    event.preventDefault();
    // new variable to hold the current state of posts
    let newPosts = [...this.state.posts];
    // runs filter over newPosts to filter out if username equals to
    // the value inside of the state of the search input box
    // then sets the state of the posts to the new variable NewPosts
    newPosts = newPosts.filter(post => {
      if (post.username === this.state.search) {
        return post;
      }
      return null;
    });
    this.setState({ posts: newPosts });
  };

  // sets the state of event.target.name to event target value
  handleChange = event => {
    // event.preventDefault();
    // ? I'm not entirely sure what to call these. Are the props?
    this.setState({ [event.target.name]: event.target.value });
  };
  // If component mounts, then we set the posts state to include all
  // the dummy-data.js
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  // renders the components SearchBar with props for search and handleChange
  // component PostsContainer is rendered passing posts props
  render() {
    return (
      <div className="App">
        <SearchBar
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.search}
        />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}
export default PostsPage;
