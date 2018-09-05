import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../../components/SearchBar/SearchBar';
import PostContainer from '../../components/PostContainer/PostContainer';
import IGLogo from '../../assets/iglogo.png';

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

  handleSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  search = (event) => {
    event.preventDefault();
    console.log('test search');
    let newPosts = [...this.state.allPosts];
    if (this.state.searchInput === '') {
    } else
      newPosts = newPosts.filter((post) => {
        if (post.username === this.state.searchInput) {
          return post;
        }
      });
    this.setState({ posts: newPosts });
  };

  render() {
    console.log('App render');
    console.log(this.increaseLikes);
    console.log('----------------');
    return (
      // console.log(this.state.dummyData),
      <div className="App">
        <div className="title-bar">
          <div className="logo">
            <i className="fab fa-instagram" />{' '}
            <img src={IGLogo} className="logo-image" alt="logo" />
          </div>
          <SearchBar
            search={this.search}
            handleSearchInput={this.handleSearchInput}
          />
          <div className="other-icons">
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user" />
          </div>
        </div>
        {this.state.posts.map((post, index) => (
          <PostContainer post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default PostsPage;
