import React, { Component } from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.allPosts,
      inquiry: ''
    }
  }

  render() {
    return (
      <div>
        <div className='SearchBar'>
          <input type="text" placeholder="Search (doesn't work yet...)" />
          <button>Search</button>
        </div>
        <div>
          {this.state.posts.map((post, index) => {
            return (
              <PostContainer postData={post} key={index} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default SearchBar;