import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  state = {
    posts: [],
    searchText: '',
    filteredPosts: [],
    username: 'kevinsooter'
  };

  componentDidMount() {
    if (window.localStorage.getItem('comments')) {
      this.setState({
        posts: JSON.parse(window.localStorage.getItem('comments')),
        username: localStorage.getItem('username')
      });
    } else {
      this.setState({ posts: dummyData });
    }
    window.localStorage.setItem('comments', JSON.stringify(dummyData));
  }

  logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();
  };

  searchHandler = event => {
    this.setState({ searchText: event.target.value });

    setTimeout(() => {
      const posts = this.state.posts.filter(post => {
        return post.username.includes(this.state.searchText) ? post : null;
      });

      if (posts.length > 0) {
        this.setState({ filteredPosts: posts });
      } else {
        return;
      }
    }, 30);
  };

  render() {
    return (
      <div className="PostsPage">
        <div className="header-wrapper">
          <header className="staticbar">
            <div className="instaclone-logo">
              <i className="fab fa-instagram" />
              <p>Instaclone</p>
            </div>
            <SearchBar searchHandler={this.searchHandler} />
            <div className="social-icons">
              <i className="far fa-compass" />
              <i className="far fa-heart" />
              <i onClick={this.logout} className="far fa-user" />
            </div>
          </header>
          <div className="postcontainer-wrapper">
            <PostContainer
              data={
                this.state.filteredPosts.length > 0
                  ? this.state.filteredPosts
                  : this.state.posts
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PostsPage;
