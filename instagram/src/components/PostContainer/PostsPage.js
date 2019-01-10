import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import propTypes from "prop-types";
import Login from '../Login/Login';

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      searchInput: ""
    };
  }
  componentDidMount() {
    this.setState({
      post: dummyData
    });
  }

  
  searchHandler = text => {
    if (text === "") {
      this.setState({ post: dummyData });
    } else {
      const searchResults = this.state.post.filter(c => c.username === text);
      this.setState({ post: searchResults });
    }
  };

  search = event => {
    event.preventDefault();
    if (!(this.state.searchInput === "")) {
      this.setState({
        post: [],
        inputText: ""
      });
    }
  };

  render() {
    return (
      <div className="PostsPage">
        <SearchBar searchHandler={this.searchHandler} />
        <Login />
        <PostContainer posts={this.state.post} user={this.props.user} />
      </div>
    );
  }
}

PostsPage.propTypes = { card: propTypes.arrayOf(propTypes.object) };

export default PostsPage;
