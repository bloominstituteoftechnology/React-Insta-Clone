import React, {Component} from 'react';
import data from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostsPage extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({posts: data});
  }

  searchPostsHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({filteredPosts: posts});
  };

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchTerm={this.state.searchTerm}
          searchPosts={this.state.searchPostsHandler}
        />

        <PostsContainer 
          post = {
            this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;