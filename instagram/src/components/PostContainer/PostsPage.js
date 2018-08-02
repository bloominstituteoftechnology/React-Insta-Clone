import React from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    console.log(posts);
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div>
        <SearchBarContainer searchPosts={this.searchPostsHandler}/>
        <div className="container">
          {
            this.state.filteredPosts.length > 0
            ? this.state.filteredPosts.map(post => <PostContainer key={post.username} user={post}/>)
            : this.state.posts.map(post => <PostContainer key={post.username} user={post}/>)}
        </div>
      </div>
    );
  }
}

export default PostsPage;
