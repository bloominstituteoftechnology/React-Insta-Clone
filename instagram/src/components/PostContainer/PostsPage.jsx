import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import "./PostsPage.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = styled.header`
  position: fixed;
  height: 80px;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.4)
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

class PostsPage extends Component {


  state = {
      posts: [],
      searchText: "",
      filteredPosts: [],
      username: "tomtarpey"
  }

  // on mounting the component load in the state data for day 2 mvp goal
  componentDidMount() {
    //this.setState({ posts: dummyData });
    if (window.localStorage.getItem("comments")) {
      this.setState({
        posts: JSON.parse(window.localStorage.getItem("comments")), username: localStorage.getItem('username')
      });
    } else {
      this.setState({ posts: dummyData });
    }
    window.localStorage.setItem("comments", JSON.stringify(dummyData));
  }

  logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  }
  // searchHandler method DAY 2 MVP Goal
  searchHandler = event => {
    // set the searchText to the current input value
    this.setState({ searchText: event.target.value });

    // loop every 30ms
    setTimeout(() => {
      // filter the posts using the searchText for username
      const posts = this.state.posts.filter(post => {
        return post.username.includes(this.state.searchText) ? post : null;
      });

      // only render the posts if there are any
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
              <i className="fab fa-instagram" />
              <p>Instaclone</p>
            </InstacloneLogo>
            <SearchBar searchHandler={this.searchHandler} />
            <SocialIcons>
              <i className="far fa-compass" />
              <i className="far fa-heart" />
              <ReactTooltip />
              <i data-tip="Logout" onClick={this.logout}className="far fa-user" />
            </SocialIcons>
          </Header>
            <div className="postcontainer-wrapper">
            <PostContainer data={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
            </div>
        </div>
      </div>
    );
  }
}

export default PostsPage;
