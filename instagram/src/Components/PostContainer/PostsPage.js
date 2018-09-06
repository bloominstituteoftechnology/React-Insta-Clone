import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const InstacloneLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Grand Hotel', cursive;
  font-size: 36px;
  margin-left: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  font-size: 25px;
  margin-right: 20px;
  color: #ccc;
`;

const InstaI = styled.i`
  margin-right: 20px;
`;

const InstaP = styled.p`
  border-left: 2px solid #333;
  padding-left: 20px;
`;

const SocialIconsI = styled.i`
  cursor: pointer;
  color: black;
`;

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
          <Header>
            <InstacloneLogo className="instaclone-logo">
              <InstaI className="fab fa-instagram" />
              <InstaP>Instaclone</InstaP>
            </InstacloneLogo>
            <SearchBar searchHandler={this.searchHandler} />
            <SocialIcons>
              <SocialIconsI className="far fa-compass" />
              <SocialIconsI className="far fa-heart" />
              <SocialIconsI
                data-tip="Logout"
                onClick={this.logout}
                className="far fa-user"
              />
            </SocialIcons>
          </Header>
          <div>
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
