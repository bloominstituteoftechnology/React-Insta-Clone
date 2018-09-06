import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchInput: '',
      allPosts: dummyData,
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  search = (event) => {
    event.preventDefault();
    console.log('test search');
    let newPosts = [...this.state.allPosts];
    if (this.state.searchInput === '') {
      newPosts = [...this.state.allPosts];
    } else
      newPosts = newPosts.filter((post) => {
        if (post.username === this.state.searchInput) {
          return post;
        } else {
          return null;
        }
      });
    this.setState({ posts: newPosts });
  };

  render() {
    console.log('App render');
    // console.log(this.increaseLikes);
    console.log('----------------');
    return (
      <div className="App">
        <SearchBar search={this.search} handleChange={this.handleChange} />
        {this.state.posts.map((post, index) => (
          <PostContainer post={post} key={post.imageUrl} />
        ))}
      </div>
    );
  }
}

export default PostsPage;
