import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PostsPage from "./components/PostContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./data/dummy-data";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      staticData: [],
      user: "",
      search: ""
    };
  }

  componentDidMount() {
    let username = localStorage.getItem("thisUser");
    console.log(username);
    this.setState({ posts: dummyData, staticData: dummyData, user: username });
  }

  searchInput = event => {
    this.setState({
      search: event.target.value
    });
    const searchArray = this.state.staticData.slice();
    /* If search field is empty, show all posts */
    if (event.target.value === "")
      this.setState({ posts: this.state.staticData });
    /* Filters out posts with usernames not including substr this.state.search */ else {
      const resultsArray = searchArray.filter(post => {
        return post.username.includes(this.state.search);
      });
      this.setState({
        posts: resultsArray
      });
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          changeHandler={this.searchInput}
          searchState={this.state.search}
          logout={this.props.logout}
        />
        <PostsPage posts={this.state.posts} user={this.state.user} />
      </div>
    );
  }
}

App.Proptypes = {
  logout: PropTypes.func
};

export default styled(Authenticate(App))`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 600px;
  }
`;
