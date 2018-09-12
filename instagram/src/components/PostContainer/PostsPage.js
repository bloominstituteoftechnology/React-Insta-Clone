import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";


class PostsPage extends Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      search: ''
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  search = event => {
    event.preventDefault();
    let newPosts = this.state.posts.slice();
    newPosts = newPosts.filter(post => {
      if (post.username === this.state.search) {
        return post;
      }
    });
    this.setState({ posts: newPosts });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  


  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} handleChange={this.handleChange}/>
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;
