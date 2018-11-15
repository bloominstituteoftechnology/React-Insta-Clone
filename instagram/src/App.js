import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  handleSearch = ev => {
    this.setState({
      searchText: ev.target.value
    });
  };

  searchPosts = ev => {
    ev.preventDefault();
    let slicedData = this.state.data.slice();
    let userName = this.state.searchText;
    let posts = slicedData.filter(post => post.username.includes(userName));
    console.log("search working");
    this.setState({ data: posts });
  };

  render() {
    return (
      <div className="App">
        <PostsPage
          handleSearch={this.handleSearch}
          searchText={this.state.searchText}
          postsData={this.state.data}
          commentText={this.state.commentText}
          handleComment={this.handleComment}
          addComment={this.addComment}
          addLike={this.addLike}
        />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default Authenticate(App);
