import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import { Container } from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';



class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: [],

    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <Container className="App">
        <SearchBar
          searchPosts={this.searchPostsHandler}
        />
        {this.state.filteredPosts.length > 0 ? this.state.filteredPosts.map(post => <PostContainer key={post.timestamp} postProp={post} />) : this.state.posts.map(post => <PostContainer key={post.timestamp} postProp={post} />)}
      </Container>
    );
  }
}



export default PostsPage;
