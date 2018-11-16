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

  filterSearch = ev => {
    ev.preventDefault();

    this.setState({
      searchText: ev.target.value
    });
  };

  render() {
    let posts = this.state.data.filter(post =>
      post.username.includes(this.state.searchText)
    );

    return (
      <div className="App">
        <PostsPage
          filterSearch={this.filterSearch}
          searchText={this.state.searchText}
          postsData={posts}
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
