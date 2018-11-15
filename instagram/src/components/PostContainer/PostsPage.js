import React, { Component} from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    let storedPosts = JSON.parse(localStorage.getItem('posts'));
    if(storedPosts) {this.setState({ posts: storedPosts})}
    this.setState({
      posts: dummyData,
    })
  }

  handleSearchChange = e => {
    let posts = this.state.posts.filter(post => {
      if(post.username.includes(e.target.value)) {
        return post;
      }
    });return this.setState({ filteredPosts: posts})
  }

  render() {
    return (
      <div>
        <SearchBarContainer 
            searchPosts={this.handleSearchChange}
          />
          <PostContainer 
            data={this.state.filteredPosts.length > 0 ?
              this.state.filteredPosts : 
              this.state.posts}
          />
      </div>
    )
  }
}

export default PostsPage
