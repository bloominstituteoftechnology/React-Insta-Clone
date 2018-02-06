import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';

import dummyData from './dummy-data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      renderedPosts: []
    }

    this.filterPosts = this.filterPosts.bind(this);

  }

  componentDidMount() {
    this.setState({
      allPosts: dummyData,
      renderedPosts: dummyData
    });
  }

  filterPosts(lookingFor) {
    // if nothing is searched for renderedPosts will be all the posts
    if (lookingFor === '') {
      this.setState({
        renderedPosts: this.state.allPosts
      });
    } else {
      // filter the post username
      const filterPosts = this.state.allPosts.filter(post => post.username.includes(lookingFor));
      // change post state to reflect filtered posts
      this.setState({
        renderedPosts: filterPosts
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar posts={this.state.renderedPosts} filterPosts={this.filterPosts}/>{/*.state.filterPosts??*/}
        </div>

        <div>
          {this.state.renderedPosts.map((post, i) => {
            return (
              <PostContainer post={post}/> // PostContainer component is composed with commentSection component
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
