import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
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
          return;
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
          <SearchBar search={this.search} handleChange={this.handleChange} />
          <div className="other-icons">
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user" />
          </div>
        </div>
        {this.state.posts.map((post, index) => (
          <PostContainer post={post} key={post.imageUrl} />
        ))}
      </div>
    );
  }
}

export default PostsPage;
