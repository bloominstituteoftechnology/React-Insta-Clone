import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostList/PostList'

import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchText: '',
      currentUser: ''
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
      currentUser: 'BobBelcher'
    });
  }

  handleCommentClick() {
    // method adds a comment to selected post
    // gets current post
    console.log('handle comment');
    // gets current user

    // gets comment

    // adds username and comment to the post
    

  }

  handleLikeClick() {
    // method adds a like to selected post
    // gets current post
    console.log('handle like');

    // adds a like to current likes


  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
